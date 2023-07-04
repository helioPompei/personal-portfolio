import * as S from "./styles";

import { projects } from "../../data/projects";

import { SiGithub } from "react-icons/si";

const customOptions = {
  reverse: true,
  max: 5,
  scale: 1,
};

export const Card = () => {
  return (
    <>
      {projects.map((project) => (
        <S.Card options={customOptions}>

          <S.TitleProject>
            <h1> {project.title} </h1>
            <a href={project.link} target="_blank">
              <SiGithub />
            </a>
          </S.TitleProject>

          <div>
            <img src={project.image} alt="" />
          </div>
          <p>{project.description}</p>
          <S.TechDiv>
            <h2>Techs:</h2>
            {project.techs.map((tech) => (
              <>{tech}</>
            ))}
          </S.TechDiv>
        </S.Card>
      ))}
    </>
  );
};
