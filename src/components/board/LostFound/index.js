import Main from "./Main";
import Search from "./Search";
import BoardPage from "../BoardPage";

const LostFound = () => {
    return (
        <>
            <Main />

            <BoardPage postIdx={1} />

            <Search />
        </>
    );
};

export default LostFound;