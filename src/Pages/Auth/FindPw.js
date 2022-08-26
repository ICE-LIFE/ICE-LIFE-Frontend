import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
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

const FindPw = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");

    const handleFindPw = async e => {
        e.preventDefault();
        const frm = new FormData();
        frm.append("email", email + "@inha.edu");
        frm.append("nickname", nickname);

        (async () => {
            try {
                const response = await axios.post("/findpw", frm, { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true });
                // if (response !== "수정예정") {
                //     navigate("/");
                // }
                // 수정 예정
                // navigate("/findpwcode", { state: { email: email + "@inha.edu" } });
                navigate("/findpw", { state: { email: email + "@inha.edu" } });
            } catch (error) {
                alert("입력 내용을 다시 확인해주세요!");
            }
        })();
    };

    const onChange = (value) => {
        console.log('Captcha value:', value);
    };

    return (
        <Container>
            <FormHeader>비밀번호 찾기</FormHeader>
            <Form>
                <p>
                    회원가입 시 등록하신 학교 계정 주소를 입력해 주세요.<br />
                    해당 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.
                </p>
                <FormLabel htmlFor="email">학교 계정 메일</FormLabel>
                <FormInput type="text" id={"email"} value={email} onChange={e => setEmail(e.target.value)} /> @inha.edu
                <FormLabel htmlFor="nickname">별명</FormLabel>
                <FormInput type="text" id={"nickname"} value={nickname} onChange={e => setNickname(e.target.value)}></FormInput>
                <Spacer />
                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={onChange} />
                <FormButton onClick={handleFindPw} colored>확인</FormButton>
            </Form>
        </Container>
    );
};

export default FindPw;