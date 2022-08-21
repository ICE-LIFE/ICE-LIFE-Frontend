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