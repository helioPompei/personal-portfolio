import { BsDatabaseFill, BsFillDisplayFill, BsGearFill } from "react-icons/bs";
import * as S from "./styles";

const frontTechs = ["React", "Styled-Components", "HTML", "CSS", "Typescript"];
const backTechs = ["Node", "Express", "Java", "RESTful APIs", "JWT"];
const databaseTechs = ["MongoDB", "Mysql", "Prisma", "Docker", "AWS", "Linux"];

export const Techs = () => {
  return (
    <S.TechContainer>
      <S.TechContent>
        <S.TechCard className="frontcard">
          <BsFillDisplayFill />
          <h1>Front-End</h1>
          <hr />
          {frontTechs.map((tech) => (
            <h2 key={tech}>{tech}</h2>
          ))}
        </S.TechCard>

        <S.TechCard className="backcard">
          <BsGearFill />
          <h1>Back-End</h1>
          <hr />
          {backTechs.map((tech) => (
            <h2 key={tech}>{tech}</h2>
          ))}
        </S.TechCard>

        <S.TechCard className="databasecard">
          <BsDatabaseFill />
          <h1>Database - DevOps</h1>
          <hr />
          {databaseTechs.map((tech) => (
            <h2 key={tech}>{tech}</h2>
          ))}
        </S.TechCard>
      </S.TechContent>
    </S.TechContainer>
  );
};
