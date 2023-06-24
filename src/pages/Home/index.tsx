import * as S from "./styles";
import image from "../../../public/Foto.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaReact } from "react-icons/fa";
import { Techs } from "../../components/Techs";

export const Home = () => {
  return (
    <S.HomeContainer id="home">
      <S.HomeContent>
        <S.RightContainer>
          <S.TitleContainer>
            <h1>
              Desenvolvedor <span>Front-End</span>
            </h1>
            <S.ReactDiv>
              <h1>React</h1>
              <FaReact />
            </S.ReactDiv>
          </S.TitleContainer>

          <S.ParagraphContainer>
            <p>
              <span>Opa!</span> Tudo bom? Sou <span>Hélio Pompei! </span> Um
              programador Full-Stack com foco no front-end em busca da minha
              primeira oportunidade!
            </p>
          </S.ParagraphContainer>

          <TypeAnimation
            sequence={[
              "Programo em",
              1000,
              "Programo em React",
              1000,
              "Programo em Node",
              1000,
              "Programo em Spring Boot",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </S.RightContainer>

        <S.LeftContainer>
          <div>
            <img src={image} alt="Foto de Helio Pompei" />
          </div>
        </S.LeftContainer>
      </S.HomeContent>
      <Techs />
    </S.HomeContainer>
  );
};
