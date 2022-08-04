import styled from "styled-components"

export const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;

    .dashboard-content {
        width: 70%;
        padding-top: 40px;
    }

    .dashboard-title {
        color: var(--gray-0);
        font-size: 18px;
        font-weight: 700;
    }

    .dashboard-info {
        color: var(--gray-0);
        font-size: 16px;
        font-weight: 400;
        margin-top: 25px;
    }
`