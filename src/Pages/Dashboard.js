import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useAuthState, logout, useAuthDispatch } from "Context";

const LogoutBtn = styled.div`
    height: '30px';
    width: '100px';
`;

const DashboardPage = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Dashboard = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState(); // 얘는 initialState
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch);
        navigate("/");
    }

    return (
        <div style={{ padding: 10 }}>
            <DashboardPage>
                <h1>대시보드</h1>
                <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
            </DashboardPage>
            <p>{userDetails.user}로 로그인 되었습니다.</p>
        </div>
    );
};

export default Dashboard;