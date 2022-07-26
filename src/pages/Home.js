import React from "react";
import styled from "styled-components";

const Img = styled.img`
    display: table;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
`;

const Home = () => {
    return (
        <div>
            <Img src="images/testBanner.png" alt="배너 이미지" />
        </div>
    );
}

export default Home;