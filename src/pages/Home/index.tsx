import * as S from "./styles";
import image from "../../assets/Foto.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaReact } from "react-icons/fa";
import { Techs } from "../../components/Techs";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <S.HomeContainer id="home">
      <S.HomeContent>
        <S.RightContainer>
          <motion.div
            style={{ zIndex: "-1" }}
            initial={{ x: -100, opacity: 0 }} // Initial state of the component
            animate={{ x: 0, opacity: 1 }} // Animation state
            transition={{ duration: 1.5 }} // Transition configuration
          >
            <S.TitleContainer>
              <h1>
                Desenvolvedor <span>Front-End</span>
              </h1>
              <S.ReactDiv>
                <h1>React</h1>
                <FaReact />
              </S.ReactDiv>
            </S.TitleContainer>
          </motion.div>

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
            style={{ fontSize: "2em", display: "inline-block", zIndex: "-1" }}
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
