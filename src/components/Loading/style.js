import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;

    & > h2 {
        color: var(--gray-0);
    }
`

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid var(--gray-0);
    border-top: 10px solid var(--error);
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`