import Main from "./Main";
import Search from "../Search";
import BoardPage from "../BoardPage";

const Notice = () => {
    return (
        <>
            <Main />
            <BoardPage postIdx={2} />
            <Search />
        </>
    );
};

export default Notice;