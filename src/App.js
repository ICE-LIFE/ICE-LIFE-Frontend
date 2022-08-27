import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "Context";
import { Home, Login, Signup, FindPw, FindPwCode, ResetPw, Dashboard, NotFound } from "Pages";
import Header from "Components/Base/Header";
import LostFound from "Components/board/LostFound";
import Notice from "Components/board/Notice";
import NoticeView from "Components/board/NoticeView";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />

        {/* Route는 반드시 Routes 컴포넌트 내에 있어야 한다. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/findpwcode" element={<FindPwCode/>} />
          <Route path="/resetpw" element={<ResetPw />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lostfound/*" element={<LostFound />} />
          <Route path="/notice/*" element={<Notice />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </AuthProvider>
    </>
  );
};

export default App;
