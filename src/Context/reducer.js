let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";
let token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).auth_token : "";

// 하위 컴포넌트에 컨텍스트로 넘길 객체
export const initialState = {
    user: "" || user,
    token: "" || token,
    errorMessage: null
};

// 인자로 들어온 action에 따라 특정 case의 내용 실행
export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token
            }
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: ""
            }
        case "LOGIN_ERROR":
            return {
                ...initialState,
                errorMessage: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
};