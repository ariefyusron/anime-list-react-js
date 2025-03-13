import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.black["100"]};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 23px 1px ${({ theme }) => theme.color.black["54"]};
  -webkit-box-shadow: 0px 0px 23px 1px ${({ theme }) => theme.color.black["54"]};
  -moz-box-shadow: 0px 0px 23px 1px ${({ theme }) => theme.color.black["54"]};

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px ${({ theme }) => theme.color.black["50"]};
    z-index: 10;
    transform: scale(1.2) translateY(-20px);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
`;

export const Image = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.color.smokeWhite};
`;

export const WrapContent = styled.div`
  padding: 8px 16px 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WrapType = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 4px;
  align-items: center;
  gap: 8px;
`;

export const TypeText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.smokeWhite};
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.color.smokeWhite};
  padding: 2px;
  border-radius: 4px;
`;

export const TextDuration = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.smokeWhite};
  font-size: 12px;
  font-weight: 600;
`;

export const TextGenre = styled(TextDuration)`
  font-size: 12px;
  font-weight: 500;
`;
