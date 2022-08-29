import axios from "axios";
import { josa } from "josa";
import "url-search-params-polyfill";

// 컨텍스트 값 업데이트를 위한 함수들

export const loginUser = async (dispatch, loginPayload) => {
    // axios를 통해 보낼 요청 url 매개변수
    const params = new URLSearchParams({
        "email": loginPayload.email,
        "password": loginPayload.password
    }).toString();

    try {
        const response = await axios.post(`/login?${params}`);
        if (response.status === 200) {
            const userInfo = await axios.get("/whoami", { headers: { "Authorization": `Bearer ${response.data}` } });
            const userIdNum = Number(userInfo.data.substr(userInfo.data.indexOf("Id") + 5, 8));
            dispatch({ type: "LOGIN_SUCCESS", payload: { user: loginPayload.email, auth_token: response.data, userIdNum: userIdNum } });
            localStorage.setItem("currentUser", JSON.stringify({ user: loginPayload.email, auth_token: response.data, userIdNum: userIdNum }));

            return response.data;
        } else {
            dispatch({ type: "LOGIN_ERROR", error: response.data.error[0] });
        }
    } catch (e) {
        dispatch({ type: "LOGIN_ERROR", error: e });
    }
};


export const logout = async dispatch => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("currentUser");
};


export const signUpUser = async signUpPayload => {
    const frm = new FormData();
    frm.append("name", signUpPayload.name);
    frm.append("id", signUpPayload.studentId);
    frm.append("password1", signUpPayload.password1);
    frm.append("password2", signUpPayload.password2);
    frm.append("nickname", signUpPayload.nickname);
    frm.append("email", signUpPayload.email);

    const formElement = {
        name: "이름",
        studentId: "학번",
        password1: "비밀번호",
        password2: "비밀번호 확인",
        nickname: "별명",
        email: "이메일",
    };
    
    // 재입력 로직
    const keys = Object.keys(signUpPayload);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i] // 각각의 키
        if (signUpPayload[key] === "") {
            alert(josa(`${formElement[key]}#{을} 입력해주세요!`));
            return "retry";
        }
    }

    if (signUpPayload.password1 !== signUpPayload.password2) {
        alert("비밀번호와 비밀번호 확인이 맞지 않습니다.");
        return "retry";
    }


    try {
        const response = await axios.post("/signup", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        if (error.response.status === 500)
            alert("이미 가입된 회원입니다!");
        else
            alert(`에러코드 ${error}로 인해 회원가입이 실패하였습니다.\n새로고침 후 다시 시도해주세요!`);
        return "retry";
    }
};