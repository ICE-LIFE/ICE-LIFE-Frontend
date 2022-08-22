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


export const signUpUser = async (dispatch, signUpPayload) => {
    const frm = new FormData();
    frm.append("name", signUpPayload.name);
    frm.append("id", signUpPayload.studentId);
    frm.append("password1", signUpPayload.password1);
    frm.append("password2", signUpPayload.password2);
    frm.append("nickname", signUpPayload.nickname);
    frm.append("email", signUpPayload.email);

    const response = null;
    try {
        response = await axios.post("/signup", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });

        if (response.status === 200) {
            
            dispatch({ type: "SIGNUP_SUCCESS" })
            return response.data;
        }
    } catch (error) {
        console.log(response);
    }
};