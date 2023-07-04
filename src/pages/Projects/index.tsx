import { Card } from "../../components/Card";
import * as S from "./styles";

export const Projects = () => {
  return (
    <S.ProjectsContainer id="projects">
      <S.ProjectsContent>
        <h1>Area de Projetos</h1>
        <Card />
      </S.ProjectsContent>
    </S.ProjectsContainer>
  );
};
