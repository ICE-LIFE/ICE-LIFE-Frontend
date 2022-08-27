import { Button } from "react-bootstrap";
// css 문법을 사용할 수 있도록 
import styled from 'styled-components';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadTitle = styled.h1`
    margin-top: 20px;
    margin-left: 10vw;
    float: center;
    padding: 5px 10px;
    border-radius: 15px;

    font-weight: 600;
    transition: 0.1s;

    color: var(--color-dark);

`


const Writebutton = styled.button`
    float: right;
    padding: 5px 10px;
    border-radius: 15px;

    margin: auto;
    // 10% , width 기준 
    margin-right : 10vw;
    margin-bottom : 35px;

    text-decoration: none;
    font-weight: 600;
    transition: 0.1s;

    border: none;
    color: #ffffff;
    background : #1E21CB;
    :hover {
        letter-spacing: 1px;
        transform: scale(1.05);
        cursor: pointer;
}
`

function Main(props) {
    return (
        <MainContainer>
            <HeadTitle>학생회 공지</HeadTitle>
            <Writebutton>글쓰기</Writebutton>
        </MainContainer>
    );
}

export default Main;
