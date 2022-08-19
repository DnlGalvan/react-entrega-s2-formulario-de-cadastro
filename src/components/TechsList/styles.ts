import styled from "styled-components"

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    background: var(--gray-3);
    border-radius: 4px;
    margin-top: 20px;
    padding: 25px;
    gap: 16px;

    @media (max-width: 1024px) {
        padding: 25px 10px;
    }
`

export const EmptyList = styled.h2`
    color: var(--gray-0);
    margin-top: 20px;
`