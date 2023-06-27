import styled from "styled-components";

export const TechContainer = styled.header`
  background-color: white;
  width: 100%;
  height: 200px;
`;

export const TechContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;

  div svg {
    font-size: 4em;
  }
`;

export const TechTitle = styled.div`
  h1 {
  }
`;

export const ContainerMotionTechs = styled.div`
  div {
    display: flex;
  }
  div div svg:hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: translateY(-10px);
  }
`;
