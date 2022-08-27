import { useContext, createContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";


// createContext를 통해 컨텍스트를 생성하고, {컨텍스트 이름}.Provider을 통해 하위 컴포넌트에게 컨텍스트를 넘겨서
// 하위 컴포넌트에서 useContext를 통해 그 값을 가져다가 쓴다.


// 이 컨텍스트에는 인증 토큰과 사용자 세부 정보가 포함된다.
const AuthStateContext = createContext(null);

// 이 컨텍스트는 useReducer를 사용하여 상태를 관리하기 위해 나중에 생성할 dispatch를 전달한다.
// 이렇게 하면 필요한 구성 요소에 dispatch를 쉽게 제공할 수 있다.
const AuthDispatchContext = createContext(null);

// 하위 컴포넌트에서 해당 함수를 호출함으로써, 위에서 createContext로 생성한 컨텍스트를
// 해당 함수를 호출 한 하위 컴포넌트로 넘길 수 있다.
export const useAuthState = () => {
    // useContext를 통해, 사전 생성된 컨텍스트를 호출
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState는 AuthProvider 안에서만 사용 가능합니다.");
    }
    return context;
};

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch는 AuthProvider 안에서만 사용 가능합니다.");
    }

    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        // {컨텍스트 이름}.Provider은 값을 하위 컴포넌트로 넘기는 역할,
        // 실제로 넘겨지는 값은 value값
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
};
