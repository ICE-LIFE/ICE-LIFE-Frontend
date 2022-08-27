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

const FormItem = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap:wrap; 
    margin-bottom: 1rem;
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


const FindPwCode = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [code, setCode] = useState("");

    const handleCodeCheck = async e => {
        e.preventDefault();

        const frm = new FormData();
        frm.append("email", state.email)
        frm.append("validcode", code);

        try {
            const response = await axios.post("/pwvalidcheck", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });
            if (response.data === "redirect:/findpw") {
                alert("코드가 맞지 않습니다.\n다시 확인해주세요.");
                return;
            }
            navigate("/resetpw", { state: { email: state.email } });
        } catch (error) {
            console.log("test");
        }

    };

    return (
        <Container>
            <FormHeader>이메일 인증</FormHeader>
            <Form>
                <FormItem>
                    <FormLabel htmlFor="email">email</FormLabel>
                    <FormInput type="text" id={"email"} value={state.email} disabled />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="code">인증 코드</FormLabel>
                    <FormInput type="text" id={"code"} onChange={e => setCode(e.target.value)} />
                </FormItem>
                <Spacer />
                <FormButton onClick={handleCodeCheck} colored>확인</FormButton>
            </Form>
        </Container>
    );
};

export default FindPwCode;