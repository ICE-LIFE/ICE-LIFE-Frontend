import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthDispatch, loginUser } from "Context";

const Container = styled.div`
    margin: 0 auto;
    max-width: 500px;
    margin-top: 60px;
    padding: 1.5rem;
`;

const FormHeader = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Form = styled.form`
    border: 2px solid black;
    padding: 3rem 2rem;
    text-align: center;
`;

const FormItem = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap:wrap; 
    margin-bottom: 1rem;
`;

const FormLabel = styled.label`
    text-align: left;
    width: 5rem;
    font-weight: bold;
`

const FormInput = styled.input`
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 1px;

    :focus {
        outline: none;
        border-bottom: 2px solid green;
        padding-bottom: 0;
    }
`;

const FormButton = styled.button`
    display: block;
    width: 10rem;
    height: 3rem;
    margin: 1rem auto 0;
    border: 2px solid black;
    border-radius: 0.25rem;
    background-color: ${props => props.colored ? "#8fd14f" : "white"};
    font-weight: bold;

    :hover {
        background-color: ${props => props.colored ? "#83bf4a" : "#f5f5f5"};
    }
`;

const Spacer = styled.div`
    height: 1rem;
`;

const FindPw = styled(Link)`
    text-decoration: none;

    color: black;
    font-size: 0.9rem;
    margin-top: 2.2rem;
    
    :visited {
        color: black;
    }

    :hover {
        color: black;
    }
`;

const Login = () => {
    const dispatch = useAuthDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();

        let payload = { email, password };
        try {
            const response = await loginUser(dispatch, payload);
            
            if (!response) return;
            navigate("/dashboard");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Container>
            <FormHeader>로그인</FormHeader>
            <Form>
                <FormItem>
                    <FormLabel htmlFor="email">이메일</FormLabel>
                    <FormInput type="text" id={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password">비밀번호</FormLabel>
                    <FormInput type="password" id={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                </FormItem>
                <Spacer />
                <FormButton onClick={handleLogin} colored>로그인</FormButton>
                <FormButton onClick={e => { e.preventDefault(); navigate("/signup"); }}>회원가입</FormButton>
                <Spacer />
                <FindPw to="/findpw">비밀번호 찾기</FindPw>
            </Form>
        </Container>
    );
};

export default Login;