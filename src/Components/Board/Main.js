import { useParams } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 40px;
    border: 3px solid black;
    border-top: 0;
    border-left: 0;
    border-right: 0;
`;

const HeadTitle = styled.h1`
    margin-left: 3vw;
    float: center;
    padding: 20px 10px;

    font-weight: 600;
    transition: 0.1s;

    color: var(--color-dark);
`;

const Writebutton = styled.button`
    float: right;
    padding: 5px 10px;
    border-radius: 15px;

    margin: auto;
    // 10% , width 기준
    margin-right: 5vw;

    text-decoration: none;
    font-weight: 600;
    transition: 0.1s;

    border: none;
    color: #ffffff;
    background: #1e21cb;

    :hover {
        letter-spacing: 1px;
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const Main = ({ title, setWrite, write }) => {
    return (
        <MainContainer>
            <HeadTitle>{title}</HeadTitle>
            {write ? null : (
                <Writebutton
                    onClick={e => {
                        e.preventDefault();
                        setWrite(true);
                    }}>
                    글쓰기
                </Writebutton>
            )}
        </MainContainer>
    );
};

export default Main;
