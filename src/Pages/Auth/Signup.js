import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthDispatch, signUpUser } from "Context";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 600px;
`;

const SignUpForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const SignUpFormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const SignUp = () => {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");           // 이름
    const [studentId, setStudentId] = useState(""); // 학번
    const [password1, setPassword1] = useState(""); // 비밀번호
    const [password2, setPassword2] = useState(""); // 비밀번호 확인
    const [nickname, setNickname] = useState("");   // 별명
    const [email, setEmail] = useState("");         // 이메일

    const handleSignUp = async e => {
        e.preventDefault();

        let payload = { name, studentId, password1, password2, nickname, email };
        try {
            const response = await signUpUser(dispatch, payload);
            if (!response) return;
            navigate("/");
        } catch (error) {
            console.error(e);
        }
    };

    return (
        <Container>
            <FormContainer>
                <h1>회원가입</h1>
                <form>
                    <SignUpForm>
                        <SignUpFormItem>
                            <label htmlFor="name">이름</label>
                            <input type="text" id={"name"} value={name} onChange={e => setName(e.target.value)} />
                        </SignUpFormItem>
                        <SignUpFormItem>
                            <label htmlFor="studentId">학번</label>
                            <input type="number" id={"studentId"} value={studentId} onChange={e => setStudentId(e.target.value)} />
                        </SignUpFormItem>
                        <SignUpFormItem>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id={"password1"} value={password1} onChange={e => setPassword1(e.target.value)} />
                        </SignUpFormItem>
                        <SignUpFormItem>
                            <label htmlFor="email">비밀번호 확인</label>
                            <input type="password" id={"password2"} value={password2} onChange={e => setPassword2(e.target.value)} />
                        </SignUpFormItem>
                        <SignUpFormItem>
                            <label htmlFor="nickname">별명</label>
                            <input type="text" id={"nickname"} value={nickname} onChange={e => setNickname(e.target.value)} />
                        </SignUpFormItem>
                        <SignUpFormItem>
                            <label htmlFor="email">이메일</label>
                            <input type="text" id={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                        </SignUpFormItem>
                    </SignUpForm>
                    <button onClick={handleSignUp}>회원가입</button>
                </form>
            </FormContainer>
        </Container>
    );
};

export default SignUp;
