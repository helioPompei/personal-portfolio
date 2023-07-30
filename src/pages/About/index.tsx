import * as S from "./styles";
import programming from "../../assets/Programming-amico.svg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.AboutContent>
        <S.LeftContainer>
          <img src={programming} alt="" />
        </S.LeftContainer>
        <S.RightContainer style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
          >
            <h1>Sobre mim...</h1>
            <p>
              Meu nome é Hélio e sou um entusiasta de programação. Trabalho
              atualmente como técnico em informática enquanto concentro meus
              estudos em desenvolvimento web com as tecnologias React, Node e
              Spring Boot. Já participei de um programa de bolsas voltado para
              DevOps e computação em nuvem, nele obtive experiências nessas
              mesmas áreas mexendo com tecnologias como Docker, Kubernetes e
              AWS... Atualmente procuro por minha primeira vaga e me encontro
              animado em aplicar minhas habilidades e crescer profissionalmente
              na área de programação.
            </p>
          </motion.div>
        </S.RightContainer>
      </S.AboutContent>
    </S.AboutContainer>
  );
};
