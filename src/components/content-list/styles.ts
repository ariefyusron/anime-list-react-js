import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  gap: 16px;
  padding: 32px;

  @media only screen and (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
