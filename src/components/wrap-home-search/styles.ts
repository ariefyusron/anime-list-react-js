import styled from "styled-components";

export const Topbar = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: sticky;
  top: 0;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 40px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  width: 300px;

  @media only screen and (max-width: 430px) {
    width: unset;
    flex: 1;
  }
`;

export const Button = styled.button`
  margin-left: 8px;
  padding: 4px;
  color: ${({ theme }) => theme.color.background};
`;
