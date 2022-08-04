import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    height: 970px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`

export const DivTitle = styled.div`
    width: 92%;
    display: flex;
    justify-content: space-between;
`
export const ButtonBack = styled.button`
    height: 40px;
    width: 70px;
    background: var(--gray-3);
    border-radius: 4px;
    color: var(--gray-0);

    :hover {
        background: var(--gray-2);
    }
`

export const Title = styled.h1`
    color: var(--color-primary);
`

export const Form = styled.form`
    width: 92%;
    height: 92%;
    background: var(--gray-3);
    border-radius: 4px;
    color: var(--gray-0);
    display: flex;
    flex-direction: column;
    padding: 42px 15px;
    gap: 10px;

    .form-title {
        color: var(--gray-0);
        font-size: 18px;
        font-weight: 700;
        text-align: center;
    }

    .form-info {
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        color: var(--gray-1);
    }

    .form-label {
        font-size: 12px;
    }

    .form-input {
        height: 48px;
        background: var(--gray-2);
        border-radius: 4px;
        color: var(--gray-0);
        padding-left: 15px;
        ::placeholder {
            color: var(--gray-1);
        }
        :focus {
            border: 1.5px solid var(--gray-0);
        }
    }

    .form-error {
        font-size: 12px;
        height: 12px;
        color: var(--error);
    }

    .form-button {
        height: 48px;
        border-radius: 4px;
        background: var(--color-primary);
        color: var(--gray-0);
        font-size: 16px;
        font-weight: 500;

        :hover {
            background: var(--color-primary-focus);
        }

        :disabled {
            background: var(--color-primary-disabled);
        }
    }

`
export const ContainerRegister = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .register-span {
        font-size: 12px;
        font-weight: 600;
        color: var(--gray-1);
    }

    .register-button {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        color: var(--gray-0);
        font-size: 16px;
        font-weight: 500;
        background: var(--gray-1);

        :hover {
            background: var(--gray-2);
        }
    }
`