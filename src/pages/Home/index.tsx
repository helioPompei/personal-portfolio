import { motion } from "framer-motion";
import MyPhotoImage from "../../assets/images/MyPhotoImage.jpg";
import { Techs } from "../../components/Techs";
import { typedData } from "../../utils/TypeData";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer id="home">
      <S.HomeContent>
        <S.LeftContainer>
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Initial state of the component
            animate={{ x: 0, opacity: 1 }} // Animation state
            transition={{ duration: 3 }} // Transition configuration
          >
            <S.TitleContainer>
              <h1>
                Olá!👋 Sou{" "}
                <span>
                  Hélio <S.ReactIcon />
                </span>
              </h1>
              <h2>
                <span>Desenvolvedor</span> Full-Stack
              </h2>
            </S.TitleContainer>
          </motion.div>

          <S.StyledTypeAnimation
            sequence={typedData}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </S.LeftContainer>

        <S.RightContainer>
          <div>
            <img src={MyPhotoImage} alt="Foto de Helio Pompei" />
          </div>
        </S.RightContainer>
      </S.HomeContent>
      <Techs />
    </S.HomeContainer>
  );
};
