import styled from "styled-components";

export const TechContainer = styled.header`
  background-color: #FAFAFA;
  width: 100%;
  height: 200px;
`;

export const TechContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  max-width: 1280px;
  height: 100%;
`;

export const TechTitle = styled.div`
  h1 {
    margin-top: 1em;
    font-size: 2em;
    margin-bottom: 0.5em;
  }
`;

export const ContainerMotionTechs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 100%;

  div {
    display: flex;
  }

  div div {
    display: flex;
    align-items: center;
    flex-direction: column;

    label {
      font-weight: 500;
      font-size: 0.875em;
    }

    svg {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      margin: 0.1em;
      font-size: 4em;
    }
  }

  div div svg:hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: translateY(-15px);
  }
`;
