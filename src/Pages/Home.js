import styled from "styled-components";

const Banner = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

const Img = styled.img`
    object-fit: fill;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    max-width: 1200px;
    margin: 60px auto;
`;

const PreviewHeader = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
`;

const BoardPreview = styled.div``;

const PostListPreview = styled.div`
    border: 1px solid black;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <>
            <Banner>
                <Img src="images/testBanner.png" alt="배너 이미지" />
            </Banner>
            <Preview>
                <BoardPreview>
                    <PreviewHeader>중고 거래</PreviewHeader>
                    <PostListPreview>
                        게시글 내용
                    </PostListPreview>
                </BoardPreview>

                <BoardPreview>
                    <PreviewHeader>분실물 센터</PreviewHeader>
                    <PostListPreview>
                        게시글 내용
                    </PostListPreview>
                </BoardPreview>

                <BoardPreview>
                    <PreviewHeader>학생회 공지</PreviewHeader>
                    <PostListPreview>
                        게시글 내용
                    </PostListPreview>
                </BoardPreview>
            </Preview>
        </>
    );
};

export default Home;