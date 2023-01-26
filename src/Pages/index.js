// 이 파일은 pages 디렉터리 내에 있는 파일들을 외부에서 간단하게 접근할 수 있도록 내보내주는 역할을 한다.
// 만약 이게 없다면 외부에서는
// import Home from "pages/Home";
// import Auth from "pages/Auth";
// 과 같은 식으로 하나하나 작성해야 하겠지만,
// 이런 식으로 각 파일들을 각 이름대로의 객체로 내보내주게 되면
// import { Home, Auth } from "pages";

// 와 같은 식으로 외부에서 쉽게 가져다가 쓸 수 있다.
export { default as Home } from "./Home";
export { default as Login } from "./Auth/Login";
export { default as Signup } from "./Auth/Signup";
export { default as FindPw } from "./Auth/FindPw";
export { default as FindPwCode } from "./Auth/FindPwCode";
export { default as ResetPw } from "./Auth/ResetPw";
export { default as LostFound } from "./Board/LostFound";
export { default as Notice } from "./Board/Notice";
export { default as UsedTrade } from "./Board/UsedTrade";
export { default as Dashboard } from "./Dashboard";
export { default as NotFound } from "./NotFound";
