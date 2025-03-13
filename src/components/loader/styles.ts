import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.color.white1};
  border-top-color: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
