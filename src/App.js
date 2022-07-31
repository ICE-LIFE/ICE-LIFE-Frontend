import { Route, Routes } from "react-router-dom";
import { Home, Auth } from "pages";
import HeaderContainer from "components/Base/HeaderContainer";

const App = () => {
  return (
    <>
      <HeaderContainer />
      
      {/* Route는 반드시 Routes 컴포넌트 내에 있어야 한다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      
    </>
  );
};

export default App;
