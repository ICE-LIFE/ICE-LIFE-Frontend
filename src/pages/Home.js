import styled from "styled-components";

const Banner = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

const Img = styled.img`
    //width: 100%;
    height: 360px;
    object-fit: fill;
`;

const Preview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
`;

const PreviewHeader = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
`;

const BoardPreview = styled.div`
    
    background-color: var(--color-accent);
    margin-left: 100px;
    margin-right: 100px;
`;

const PostListPreview = styled.div`
    border: 1px solid black;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
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