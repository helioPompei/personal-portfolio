import { Card } from "../../components/Card";
import * as S from "./styles";

export const Projects = () => {
  return (
    <S.ProjectsContainer id="projects">
      <S.ProjectsContent>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </S.ProjectsContent>
    </S.ProjectsContainer>
  );
};
