import styled from 'styled-components';



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

function Main() {
    return (
        <>
            <HeadTitle>학생회 공지</HeadTitle>
        </>
    );
};
export default Main;

