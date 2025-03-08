import styled from "styled-components";

export const Topbar = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  position: sticky;
  top: 0;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  gap: 16px;
  padding: 32px;
`;
