import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    max-width: 400px;
    height: 970px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`

export const DivTitle = styled.div`
    height: 50px;
    width: 92%;
    display: flex;
    justify-content: space-between;
    background: var(--gray-2);

    > h3 {
        color: var(--gray-0);
        font-size: 14px;
    }

`

export const ButtonClose = styled.button`
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 4px;
    color: var(--gray-1);

    :hover {
        color: var(--gray-0);
        scale: 1.2;
    }

    :active {
        background: var(--color-primary);
    }
`