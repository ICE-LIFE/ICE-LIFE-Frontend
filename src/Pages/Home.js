import { Link } from "react-router-dom";
import { shadow } from "Lib/styleUtils";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  ${shadow(1)}
`;

const Img = styled.img`
  object-fit: fill;
  width: 100%;
  margin: 0 auto;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vw;
  max-width: 1200px;
  margin: 60px auto;
`;

const PreviewHeader = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const BoardPreview = styled.div``;

const PostListPreview = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  min-height: 300px;
  padding-top: 1em;
  border: 1px solid black;

  line-height: 2.5em;
`;

const Home = () => {
  return (
    <>
      <Banner>
        <Img src="images/banner.png" alt="배너 이미지" />
      </Banner>
      <Preview>
        <BoardPreview>
          <PreviewHeader>중고 거래</PreviewHeader>
          <PostListPreview>
            <ul>
              <li>공학용 계산기 팔아요! 카시오껀데 모델명 모름</li>
              <li>무릎 담요 필요하신분~ 무료 나눔해요💛</li>
              <li>노트북 키스킨 구합니당...</li>
              <li>공업수학2 책 팝니다!</li>
              <li>베릴로그 도와주실 분 구합니다</li>
            </ul>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <p style={{ marginLeft: "20px", fontWeight: 800 }}>...더보기</p>
            </Link>
          </PostListPreview>
        </BoardPreview>

        <BoardPreview>
          <PreviewHeader>분실물 센터</PreviewHeader>
          <PostListPreview>
            <ul>
              <li>에어팟 보신분... 232에서 잃어버렸어요!</li>
              <li>하텍 근처에서 가방을 잃어버렸어요</li>
              <li>제 자전거 가져가신분 3일 내로 돌려놓으세요</li>
              <li>혹시 귀걸이 잃어버리신 분 학실에 뒀습니다!</li>
              <li>usb 찾습니다! 검정색 동그란 usb에요!</li>
            </ul>
            <Link
              to="/lostfound"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p style={{ marginLeft: "20px", fontWeight: 800 }}>...더보기</p>
            </Link>
          </PostListPreview>
        </BoardPreview>

        <BoardPreview>
          <PreviewHeader>학생회 공지</PreviewHeader>
          <PostListPreview>
            <ul>
              <li>2022 학생회 사진 촬영 이벤트</li>
              <li>2022-2 정보통신공학과 종강총회</li>
              <li>기말고사 간식 드리미 본신청 안내</li>
              <li>학생회 전체 회의 관련 공지</li>
              <li>2022-2 choICE 전체 회의 안내</li>
            </ul>
            <Link
              to="/notice"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p style={{ marginLeft: "20px", fontWeight: 800 }}>...더보기</p>
            </Link>
          </PostListPreview>
        </BoardPreview>
      </Preview>
    </>
  );
};

export default Home;
