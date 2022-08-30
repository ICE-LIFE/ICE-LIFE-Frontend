import { useParams } from "react-router-dom";
import Main from "Components/Board/Main";
import PostList from "Components/Board/PostList";
import Search from "Components/Board/Search";
import View from "Components/Board/View";

const Notice = () => {
    const { postIdx } = useParams();
    return (
        <>
            <Main title={"학생회 공지"} />
            {/* 뷰페이지를 띄울지, 게시글 리스트를 띄울지 결정하는 로직 */}
            {
                postIdx ?
                    <View boardName={"notice"} /> :
                    <>
                        <PostList boardIdx={"notice"} />
                        <Search />
                    </>
            }
        </>
    );
};

export default Notice;