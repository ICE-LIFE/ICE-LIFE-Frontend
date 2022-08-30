import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthState } from 'Context';

const HeadTitle = styled.h1`
    margin-top: 20px;
    margin-left: 10vw;
    float: center;
    padding: 5px 10px;
    border-radius: 15px;

    font-weight: 600;
    transition: 0.1s;

    color: var(--color-dark);

`;

const View = ({ boardName }) => {
    const userInfo = useAuthState();
    const accessToken = userInfo.token || "";
    const [contents, setContents] = useState("");
    const { postIdx } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/board/${boardName}/${parseInt(postIdx) + 1}`, { headers: { "Authorization": `Bearer ${accessToken}` } });
                if (response.status === 200)
                    setContents(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [postIdx]);

    return (
        <>
            <HeadTitle>{contents.title}</HeadTitle>
            <p>{contents.content}</p>
            <img src={contents.thumbnail} alt={"썸네일"} />

            <Link to={`/${boardName}/${parseInt(postIdx) - 1}`}>이전글</Link>
            <Link to={`/${boardName}/${parseInt(postIdx) + 1}`}>다음글</Link>
            
        </>
    );
};

export default View;

