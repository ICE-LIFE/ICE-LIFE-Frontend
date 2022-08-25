import axios from "axios";
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
            dispatch({ type: "LOGIN_SUCCESS", payload: { user: loginPayload.email, auth_token: response.data } });
            localStorage.setItem("currentUser", JSON.stringify({ user: loginPayload.email, auth_token: response.data }));
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

    const formElement = ["이름", "학번", "비밀번호", "비밀번호 확인", "별명", "이메일"];
    
    // 재입력 로직
    if (signUpPayload.name === null) {
        alert(`${formElement}을(를) 입력해주세요!`);
        return "retry";
    }


    if (signUpPayload.password1 != signUpPayload.password2) {
        alert("비밀번호와 비밀번호 확인이 맞지 않습니다.");
        return "retry";
    }


    try {
        const response = await axios.post("/signup", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        alert(`에러코드 ${error}로 인해 회원가입이 실패하였습니다.\n새로고침 후 다시 시도해주세요!`);
    }
};