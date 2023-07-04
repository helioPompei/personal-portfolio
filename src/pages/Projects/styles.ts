import styled from "styled-components";

export const ProjectsContainer = styled.div``;

export const ProjectsContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 720px;
  background-color: ${(p) => p.theme.colors.white["white"]};

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
`;
