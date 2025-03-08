import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  h1 {
    color: ${({ theme }) => theme.color.smokeWhite};
  }
`;
