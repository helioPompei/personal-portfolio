import styled from "styled-components";
import BGHOME from "../../assets/BGHOME.jpg";

export const AboutContainer = styled.div`
  background-image: url(${BGHOME});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  color: white;
  padding: 3em;
  display: flex;

  @media (max-width: 825px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  img {
    height: 600px;
    width: 100%;
  }

  @media (max-width: 1200px) {
    img {
      height: 80%;
    }
  }

  @media (max-width: 1050px) {
    img {
      height: 60%;
    }
  }
  @media (max-width: 825px) {
    height: 50%;
    width: 100%;
    padding: 1em;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 3em;
  }

  p {
    font-size: 1.4em;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 1050px) {
    h1 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
  }

  @media (max-width: 825px) {
    height: 50%;
    width: 100%;
    padding: 2em;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 825px) {
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 1em;
    }
  }
`;
