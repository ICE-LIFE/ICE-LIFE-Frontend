// 프로젝트 엔트리 파일
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // BrowserRouter는 SPA의 장점인 브라우저를 새로고침 하지 않고 다른 페이지로 이동할 수 있게 만들어준다.
    // 자세한건 https://velog.io/@wiostz98kr/TIL49-l-React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0React-Router-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Feat.-SPA
    // 위의 링크 참조
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
