import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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


const ResetPw = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [password1, setPassword1] = useState(""); // 비밀번호
    const [password2, setPassword2] = useState(""); // 비밀번호 확인

    const handleResetPw = async e => {
        e.preventDefault();
        // if (password1 !== password2) {
        //     alert("비밀번호와 비밀번호 확인이 서로 다릅니다.");
        //     return;
        // }

        const frm = new FormData();
        frm.append("email", state.email);
        frm.append("password1", password1);
        frm.append("password2", password2);
        (async () => {
            try {
                const response = await axios.post("/resetpw", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });
                if (response.data.indexOf("error") !== -1) {
                    alert("잘못된 비밀번호입니다.");
                    return;
                }
                alert("비밀번호 변경 완료!");
                navigate("/");
            } catch (error) {
                console.log(error);
                alert("입력 내용을 다시 확인해주세요!");
            }
        })();

    };

    return (
        <Container>
            <FormHeader>비밀번호 초기화</FormHeader>
            <Form>
                <p>변경하실 비밀번호를 입력해주세요.</p>
                <FormItem>
                    <FormLabel htmlFor="password1">비밀번호</FormLabel>
                    <FormInput type="password" id={"password1"} value={password1} onChange={e => setPassword1(e.target.value)} />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password2">비밀번호 확인</FormLabel>
                    <FormInput type="password" id={"password2"} value={password2} onChange={e => setPassword2(e.target.value)} />
                </FormItem>
                <Spacer />
                <FormButton onClick={handleResetPw}>확인</FormButton>
            </Form>
        </Container>
    );
};

export default ResetPw;