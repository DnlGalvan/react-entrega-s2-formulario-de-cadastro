import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 5;
  top: 55%;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: animatetop;
  animation-duration: 0.6s;

  @keyframes animatetop {
    from {
        top: 0;
        opacity: 0
    }

    to {
        top: 55%;
        opacity: 1
    }
  }
`;

export const DivTitle = styled.div`
  height: 50px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-2);
  border-radius: 4px 4px 0 0;
  padding: 0 15px;

  > h3 {
    color: var(--gray-0);
    font-size: 14px;
  }
`;

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
`;
export const Form = styled.form`
  width: 95%;
  background: var(--gray-3);
  color: var(--gray-0);
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  gap: 10px;

  > label {
    font-size: 12px;
  }

  > input,
  select {
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

  > input:disabled {
    cursor: not-allowed;
  }

  > span {
    font-size: 12px;
    height: 20px;
    color: var(--error);
  }

  > div {
    display: flex;
    gap: 10px;
  }
  > button,
  div button {
    width: 100%;
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

  > div button + button {
    width: 50%;
    background: var(--gray-1);
    :hover {
      background: var(--gray-2);
    }
  }
`;