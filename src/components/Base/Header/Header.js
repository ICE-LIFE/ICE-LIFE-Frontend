import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow, media } from "Lib/styleUtils";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";
=======
>>>>>>> dev

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

// 중간 공간
const Spacer = styled.div`
    display: flex;
    flex-grow: 1;
    text-align: center;
    padding-left: 10rem;
    padding-right: 10rem;
`;

const Menu = styled(Link)`
    text-decoration: none;
    flex-direction: row;
    flex-grow: 1;
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

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const Header = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo to="/" >정통마켓</Logo>
                    <Spacer>
                        <Menu to="/">중고 거래</Menu>
                        <Menu to="/lostfound">분실물 센터</Menu>
                        <Menu to="/">복지물품 대여</Menu>
                        <Menu to="/Notice">학생회 공지</Menu>
                    </Spacer>
                    <HeaderAuth />
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder />
        </Positioner>
    );
};

export default Header;