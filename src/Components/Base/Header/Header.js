import styled from "styled-components";
import oc from "open-color";
import { shadow, media } from "Lib/styleUtils";
import { Link } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";

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
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
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
  font-weight: 600;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
`;

const MenuListWrapper = styled.div``;

// 중간 공간
const MenuList = styled.div`
  display: flex;
  gap: 2vw;
  text-align: center;
`;

const Menu = styled(Link)`
  text-decoration: none;
  flex-direction: row;
  color: black;
  margin: 0 10px;

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
          <Logo to="/">Ice Life</Logo>
          <MenuListWrapper>
            <MenuList>
              <Menu to="/">중고 거래</Menu>
              <Menu to="/lostfound">분실물 센터</Menu>
              <Menu to="/">복지물품 대여</Menu>
              <Menu to="/notice">학생회 공지</Menu>
            </MenuList>
          </MenuListWrapper>
          <MenuListWrapper>
            <HeaderAuth />
          </MenuListWrapper>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
};

export default Header;
