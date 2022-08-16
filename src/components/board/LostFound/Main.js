import React from 'react';

// css 문법을 사용할 수 있도록 
import styled from 'styled-components';
import oc from 'open-color';


const Writebutton = styled.button`
    position: relative;
    padding: 5px 10px;
    border-radius: 15px;

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
        <div>
            <body>
                <div className="TextBox">
                    <h1>분실물 센터</h1>
                </div>
                <div class="Button_write">
                    <Writebutton type="button" class="btn btn-outline-success" >글쓰기</Writebutton>
                </div>

            </body>
        </div>
    );
}

export default Main;
