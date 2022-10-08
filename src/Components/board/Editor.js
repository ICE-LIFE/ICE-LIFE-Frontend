import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthState } from 'Context';
import "./Editor.css";

const EditorContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const Button = styled.button`
    float: right;
    padding: 5px 10px;
    border-radius: 15px;

    margin: auto;
    // 10% , width 기준 
    margin-right : 20vw;

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
`;

const Editor = ({ boardName }) => {
    const userInfo = useAuthState();
    const accessToken = userInfo.token || "";
    const [contents, setContents] = useState("");

    const data = JSON.parse({
        title: "string",
        content: "string",
        thumbnail: "string"
    });

    const sendAricle = () => {
        (async () => {
            try {
                const response = await axios.post(`/board/${boardName}`, data, { headers: { "Authorization": `Bearer ${accessToken}` } });
                if (response.status === 200)
                    setContents(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    };

    return (
        <>
            <EditorContainer>
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        placeholder: "내용을 입력하세요.",
                    }}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContents(data);
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </EditorContainer>
            <Button onClick={e => { e.preventDefault(); sendAricle(); }}>작성 완료</Button>
        </>
    );
};

export default Editor;