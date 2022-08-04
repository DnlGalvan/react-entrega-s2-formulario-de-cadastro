import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    .nav-container {
        width: 70%;
        display: flex;
        justify-content: space-between;

        .nav-title {
            color: var(--color-primary);
            font-size: 1rem;
        }

        .nav-logout {
            height: 32px;
            width: 56px;
            background: var(--gray-3);
            color: var(--gray-0);
            border-radius: 4px;

            :hover {
                background: var(--gray-2);
            }
        }
    }
`