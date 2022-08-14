import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthState, useAuthDispatch, loginUser } from "Context";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 200px;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginFormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Login = () => {
    const dispatch = useAuthDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loading } = useAuthState() // 얘는 initialState안에 있는 애들 구조분해 할당


    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();

        let payload = { email, password };
        try {
            const response = await loginUser(dispatch, payload)
            if (!response.user) return;
            navigate("/dashboard");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Container>
            <FormContainer>
                <h1>로그인</h1>

                <form>
                    <LoginForm>
                        <LoginFormItem>
                            <label htmlFor="email">이메일</label>
                            <input type="text" id={"email"} value={email} onChange={e => setEmail(e.target.value)} disabled={loading} />
                        </LoginFormItem>
                        <LoginFormItem>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id={"password"} value={password} onChange={e => setPassword(e.target.value)} disabled={loading} />
                        </LoginFormItem>
                    </LoginForm>
                    <button onClick={handleLogin}>로그인</button>
                </form>
            </FormContainer>
        </Container>
    );
};

export default Login;