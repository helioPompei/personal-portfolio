import styled from "styled-components";
import BGPROJECT from "../../assets/BGPROJECT.jpg";
import { device } from "../../styles/BreakPoints";

export const ProjectsContainer = styled.div`
  background-image: url(${BGPROJECT});
  background-position: none;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.xxl} {
    background-position: center;
  }
`;

export const ProjectsContent = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  max-width: 1280px;
  min-height: 980px;
  padding-top: 200px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    margin: 10px;
  }

  h1 {
    border-bottom: 2px solid black;
  }

  @media ${device.md} {
    padding-top: 800px;
    padding-bottom: 100px;
  }
`;
