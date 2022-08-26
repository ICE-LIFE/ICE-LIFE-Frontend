import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const FormLabel = styled.label`
    text-align: left;
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

const Spacer = styled.div`
    height: 1rem;
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

const AuthButton = styled.button`
    width: 5rem;
    border-radius: 0.25rem;
    background-color: white;
    font-size: 0.9rem;
    font-weight: bold;

    :hover {
        background-color: #f5f5f5;
    }
`;


const FindPwCode = () => {
    const { state } = useLocation();
    const [email, setEmail] = useState("");

    const handleSandCode = async e => {
        e.preventDefault();
        
    };

    return (
        <Container>
            <FormHeader>이메일 인증</FormHeader>
            <Form>
                <FormLabel htmlFor="email">email</FormLabel>
                <FormInput type="text" id={"email"} value={state.email} disabled />
                <AuthButton onClick={handleSandCode}>코드 발송</AuthButton>
                <FormLabel htmlFor="code">인증 코드</FormLabel>
                <FormInput type="text" id={"code"} onChange={e => setEmail(e.target.value)} />
                <Spacer />
                <FormButton>확인</FormButton>
            </Form>
        </Container>
    );
};

export default FindPwCode;