import React from 'react';
import { Button } from "react-bootstrap";


function Main(props) {
    return (
        <div>
            <body>
                <div className="TextBox">
                    <h1>학생회 공지</h1>
                </div>
                <div class="Button_write">
                    <button type="button" class="btn btn-outline-success" >글쓰기</button>
                </div>

            </body>
        </div>
    );
}

export default Main;
