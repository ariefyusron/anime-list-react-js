import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex: 1;
  flex-direction: column;
`;
