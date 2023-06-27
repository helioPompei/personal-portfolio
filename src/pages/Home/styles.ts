import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div``;

export const HomeContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  background-color: ${(p) => p.theme.colors.white["white"]};
  padding: 3em;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;

  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 60%;

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const TitleContainer = styled.div`
  h1 span {
    color: #ffd700;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;

export const ReactDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;

  h1 {
    font-size: 80px;
    color: #0047ab;
  }

  svg {
    z-index: -1;
    font-size: 100px;
    color: #0047ab;

    animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 10s linear infinite;
  }
`;

export const ParagraphContainer = styled.div`
  font-size: large;

  p span {
    color: #ffd700;
    font-weight: 600;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 40%;

  img {
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
