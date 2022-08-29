import { Route, Routes } from "react-router-dom";
import { useAuthState } from "Context";
import { Home, Login, Signup, FindPw, FindPwCode, ResetPw, Dashboard, NotFound } from "Pages";
import Header from "Components/Base/Header";
import LostFound from "Components/board/LostFound";
import Notice from "Components/board/Notice";
import Chat from "Components/Chat";

const App = () => {
  return (
    <>
      <Header />

      {/* Route는 반드시 Routes 컴포넌트 내에 있어야 한다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/findpwcode" element={<FindPwCode />} />
        <Route path="/resetpw" element={<ResetPw />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lostfound" element={<LostFound />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {useAuthState().token ?
        <Chat />
        : null
      }
    </>
  );
};

export default App;
