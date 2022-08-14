import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "Context";
import { Home, Auth, Login, Dashboard, NotFound } from "Pages";
import Header from "Components/Base/Header";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />

        {/* Route는 반드시 Routes 컴포넌트 내에 있어야 한다. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </AuthProvider>
    </>
  );
};

export default App;
