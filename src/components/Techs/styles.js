import styled from "styled-components";

export const Tech = styled.li`
  background: var(--gray-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 15px 25px;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  :hover {
    background: var(--gray-2);
  }

  & > p {
    color: var(--gray-0);
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }

  & > span {
    color: var(--gray-1);
    font-size: 12px;
    padding: 0 15px;
  }

  & > button {
    background: transparent;
    color: var(--gray-0);
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;