// 컨텍스트 값 업데이트를 위한 함수들
import axios from "axios";
const ROOT_URL = "https://home.astro36.me/";


export const loginUser = async (dispatch, loginPayload) => {
    // axios를 통해 보낼 요청 객체
    const requestOptions = {
        url: `${ROOT_URL}/login`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: loginPayload
    };

    try {
        const response = await axios(requestOptions)
        if (response.status === 200) {
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
            localStorage.setItem("currentUser", JSON.stringify(response.data))
            return response.data;
        } else {
            dispatch({ type: "LOGIN_ERROR", error: response.data.error[0] })
        }
    } catch (e) {
        dispatch({ type: "LOGIN_ERROR", error: e })
    }
};


export const logout = async dispatch => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
};