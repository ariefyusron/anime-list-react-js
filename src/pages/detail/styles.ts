import styled from "styled-components";

export const Topbar = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 90px;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 32px;
  position: sticky;
  top: 0;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 40px;
`;

export const ButtonBack = styled.div`
  color: ${({ theme }) => theme.color.smokeWhite};
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Content = styled.div`
  padding: 32px;
  display: flex;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  align-self: center;
  margin-bottom: 8px;
`;

export const WrapImage = styled.div`
  border: 1px solid ${({ theme }) => theme.color.smokeWhite};
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.smokeWhite};
  font-weight: 500;
`;
