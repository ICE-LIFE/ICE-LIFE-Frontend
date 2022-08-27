import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthState, logout, useAuthDispatch } from "Context";

const Menu = styled(Link)`
    text-decoration: none;
    flex-direction: row;
    padding-left: 10px;
    color: black;
    
    // 방문한 페이지
    :visited {
        color: black;
    }

    // 클릭했을 때
    :active {
        color: green;
    }
`;

const HeaderAuth = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch);
        navigate("/");
    }

    return (
        <>
            {
            userDetails.token ? (
                <Menu to="/" onClick={handleLogout}>로그아웃</Menu>
            ) : (
                <>
                    <Menu to="/login">로그인</Menu>
                    <Menu to="/signup">회원가입</Menu>
                </>
            )}
        </>
    );

};

export default HeaderAuth;