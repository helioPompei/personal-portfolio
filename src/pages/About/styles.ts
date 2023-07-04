import styled from "styled-components";

export const AboutContainer = styled.div``;

export const AboutContent = styled.div`
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

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 3em;
  }

  p {
    font-size: 1.4em;
  }
`;
