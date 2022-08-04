import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--gray-3);
    border-bottom: 1px solid var(--gray-3);

    
    .header-div {
        width: 70%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 465px) {
            flex-direction: column;
            justify-content: flex-start;
            gap: 20px;
        }

        .header-title {
            color: var(--gray-0);
            font-weight: 700;
            font-size: 18px;
        }

        .header-module {
            color: var(--gray-1);
            font-weight: 600;
            font-size: 12px;
        }
    }
`