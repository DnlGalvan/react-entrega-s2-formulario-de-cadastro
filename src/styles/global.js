import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        --color-primary: rgba(255, 87, 127, 1);
        --color-primary-focus: rgba(255, 66, 127, 1);
        --color-primary-disabled: rgba(89, 50, 63, 1);
        --gray-4: rgba(18, 18, 20, 1);
        --gray-3: rgba(33, 37, 41, 1);
        --gray-2: rgba(52, 59, 65, 1);
        --gray-1: rgba(134, 142, 150, 1);
        --gray-0: rgba(248, 249, 250, 1);
        --sucess: rgba(63, 232, 100, 1);
        --error: rgba(232, 63, 91, 1);
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        border: none;
        box-sizing: border-box;
        outline: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: var(--gray-4);
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }
`
export default Global