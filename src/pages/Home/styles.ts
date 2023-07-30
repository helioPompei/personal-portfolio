import { FaReact } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import BGprojects from "../../assets/BGProjects.jpg";
import { device } from "../../styles/BreakPoints";
import { TypeAnimation } from "react-type-animation";

// Home Container
export const HomeContainer = styled.div`
  background-image: url(${BGprojects});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Home Content
export const HomeContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 720px;
  padding-top: 100px;
  display: flex;

  @media ${device.md} {
    flex-direction: column;
  }
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
    font-size: 1.7rem;
  }
`;

export const StyledTypeAnimation = styled(TypeAnimation)`
  height: 10px;
  vertical-align: middle;
  padding: 5px;
  font-size: 1.4rem;
  display: inline-block;
  color: white;
`;

export const ReactIcon = styled(FaReact)`
  font-size: 1em;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 10s linear infinite;
`;

export const LeftContainer = styled.div`
  z-index: 0;
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

  @media (max-width: 600px) {
    min-width: 100%;
    font-size: 0.8rem;
  }
`;
