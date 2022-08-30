import Main from "Components/Board/Main";
import PostList from "Components/Board/PostList";
import Search from "Components/Board/Search";
import View from "Components/Board/View";
import { useParams } from "react-router-dom";


const LostFound = () => {
    const { postIdx } = useParams();
    return (
        <>
            <Main title={"분실물 센터"} />
            {
                postIdx ?
                    <View boardName={"lostfound"} /> :
                    <>
                        <PostList boardIdx={"lostfound"} />
                        <Search />
                    </>
            }
        </>
    );
};

export default LostFound;