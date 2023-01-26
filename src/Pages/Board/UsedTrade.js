import { useParams } from "react-router-dom";
import Main from "Components/Board/Main";
import PostList from "Components/Board/PostList";
import Search from "Components/Board/Search";
import View from "Components/Board/View";
import Editor from "Components/Board/Editor";
import { useState } from "react";

const Notice = () => {
    const { postIdx } = useParams();
    const [write, setWrite] = useState(false);
    return (
        <>
            <Main title={"중고 거래"} setWrite={setWrite} write={write} />
            {/* 뷰페이지를 띄울지, 게시글 리스트를 띄울지 결정하는 로직 */}
            {postIdx ? (
                <View boardName={"used_trade"} />
            ) : (
                <>
                    {write ? (
                        <>
                            <Editor boardName={"used_trade"} />
                        </>
                    ) : (
                        <>
                            <PostList boardIdx={"used_trade"} />
                            <Search />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Notice;
