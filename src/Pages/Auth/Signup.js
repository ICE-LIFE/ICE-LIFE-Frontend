import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUpUser } from "Context";

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
`;

const FormItem = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap:wrap; 
    margin-bottom: 1rem;
`;

const FromLabel = styled.label`
    width: 6rem;
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

const FormButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem auto 0;
`

const FormButton = styled.button`
    width: 10rem;
    height: 3rem;
    border: 2px solid black;
    border-radius: 0.25rem;
    background-color: ${props => props.colored ? "#8fd14f" : "white"};
    font-weight: bold;

    :hover {
        background-color: ${props => props.colored ? "#83bf4a" : "#f5f5f5"};
    }
`

const Spacer = styled.div`
    height: 1rem;
`

const SignUp = () => {
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
            const response = await signUpUser(payload);
            if (response === "retry") return;
            navigate("/");
        } catch (error) {
            console.error(e);
        }
    };



    return (
        <Container>
            <FormHeader>회원가입</FormHeader>
            <Form>
                <FormItem>
                    <FromLabel htmlFor="name">이름</FromLabel>
                    <FormInput type="text" id={"name"} value={name} onChange={e => setName(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FromLabel htmlFor="studentId">학번</FromLabel>
                    <FormInput type="number" id={"studentId"} value={studentId} onChange={e => setStudentId(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FromLabel htmlFor="password">비밀번호</FromLabel>
                    <FormInput type="password" id={"password1"} value={password1} onChange={e => setPassword1(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FromLabel htmlFor="email">비밀번호 확인</FromLabel>
                    <FormInput type="password" id={"password2"} value={password2} onChange={e => setPassword2(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FromLabel htmlFor="nickname">별명</FromLabel>
                    <FormInput type="text" id={"nickname"} value={nickname} onChange={e => setNickname(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FromLabel htmlFor="email">이메일</FromLabel>
                    <FormInput type="text" id={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                </FormItem>
                <Spacer />
                <FormButtonGroup>
                    <FormButton onClick={e => { e.preventDefault(); navigate("/"); }}>취소</FormButton>
                    <FormButton onClick={handleSignUp} colored>회원가입</FormButton>
                </FormButtonGroup>
            </Form>
        </Container>
    );
};

export default SignUp;
