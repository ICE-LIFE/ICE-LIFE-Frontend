import Search from "./Search";
import BoardPage from "./BoardPage";
import Main from "./Main";

const LostFound = () => {
    return (
        <>
            <Main title={"분실물 센터"} />
            <BoardPage postIdx={1} />
            <Search />
        </>
    );
};

export default LostFound;