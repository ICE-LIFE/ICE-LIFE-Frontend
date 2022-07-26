import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "pages";
import HeaderContainer from "components/Base/HeaderContainer";

const App = () => {
  return (
    <>
      <HeaderContainer />
      
      {/* Route는 반드시 Routes 컴포넌트 내에 있어야 한다. */}
      <Routes>
        {/* exact를 써주는 이유: 비슷한 이름을 가진 여러 경로가 있을 때,
        다른 경로로 가지 않고 해당 경로로 들어갈 수 있게끔 하기 위해서 사용한다.
        아래의 경우 /와 /auth가 슬래시 부분이 겹치는데 만약 exact가 없다면,
        모든 경로에서 / 경로로 이동하게 될 것이다.
        아니면 사실 그냥 /경로를 최하단으로 배치해도 되긴 함 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      
    </>
  );
};

export default App;
