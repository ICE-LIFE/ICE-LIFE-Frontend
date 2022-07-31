import styled from "styled-components";
import Header from "components/Base/Header";
import { Link } from "react-router-dom";

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

const HeaderContainer = () => {
    return (
        <Header>
            <Menu to="">로그인</Menu>
            <Menu to="">회원가입</Menu>
        </Header>
    );

};

export default HeaderContainer;