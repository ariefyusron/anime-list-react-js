import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  div {
    color: ${({ theme }) => theme.color.smokeWhite};
    font-weight: 500;
    font-size: 18px;
  }
`;
