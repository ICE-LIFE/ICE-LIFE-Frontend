import Main from "./Main";
import Search from "../Search";
import BoardPage from "../BoardPage";
import { Routes, Route, Outlet } from "react-router-dom";
import NoticeView from "../NoticeView";

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