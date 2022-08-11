import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    justify-content: center;

    .dashboard-content {
        width: 95%;
        max-width: 1792px;
        padding-top: 18px;
    }

    .dashboard-infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .infos-title {
        color: var(--gray-0);
        font-size: 16px;
        font-weight: 600;
    }

    .infos-add-tech {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 4px;
        background: var(--gray-3);
        color: white;
        font-size: 20px;

        :hover {
            background: var(--gray-2);
        }
    }
`