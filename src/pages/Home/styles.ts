import { FaReact } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";
import BGHOME from "../../assets/BGHOME.jpg";
import { device } from "../../styles/BreakPoints";

// Home Container
export const HomeContainer = styled.div`
  background-image: url(${BGHOME});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Home Content
export const HomeContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  display: flex;

  @media ${device.md} {
    flex-direction: column;
    padding-top: 80px;
  }

  @media ${device.sm} {
    height: 620px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60%;
  margin-left: 2rem;

  @media ${device.md} {
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  font-size: 2rem;
  h1,
  h2 {
    color: white;
    span {
      color: #f4b41a;
    }
  }
  @media ${device.md} {
    font-size: 1.5rem;
  }
  @media ${device.sm} {
    font-size: 1rem;
  }
  @media ${device.xs} {
    font-size: 0.8rem;
  }
`;

export const StyledTypeAnimation = styled(TypeAnimation)`
  height: 10px;
  vertical-align: middle;
  padding: 5px;
  font-size: 1.5rem;
  display: inline-block;
  color: white;

  @media ${device.md} {
    font-size: 1.3rem;
  }
  @media ${device.sm} {
    font-size: 1rem;
  }
  @media ${device.xs} {
    font-size: 0.8rem;
  }
`;

export const ReactIcon = styled(FaReact)`
  font-size: 1em;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 10s linear infinite;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;

  img {
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
  }

  @media ${device.md} {
    width: 100%;
    img {
      height: 300px;
      margin-bottom: 100px;
    }
  }
  @media ${device.sm} {
    img {
      height: 250px;
    }
  }
  @media ${device.xs} {
    img {
      height: 200px;
    }
  }
`;
