import * as S from "./styles";
import { projects } from "../../data/projects";

export const Card = () => {
  return (
    <>
      {projects.map((project) => (
        <S.Card>
          <S.TitleProject>
            <h1> {project.title} </h1>
          </S.TitleProject>

          <S.ImageContainer src={project.image} alt={project.title} />

          <p>{project.description}</p>
        </S.Card>
      ))}
    </>
  );
};
