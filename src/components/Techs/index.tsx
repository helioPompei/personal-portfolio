import * as S from "./styles";
import {
  SiMysql,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
  SiCss3,
  SiJavascript,
  SiHtml5,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

// Motion Container props
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
// Motion Item props
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Techs = () => {
  return (
    <S.TechContainer>
      <S.TechContent>
        <S.ContainerMotionTechs>
          <S.TechTitle>
            <h1>Minhas Tecnologias</h1>
          </S.TechTitle>

          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <SiMongodb color="#3fa037" />
              <label>MONBODB</label>
            </motion.div>

            <motion.div variants={item}>
              <SiMysql color="#00758f" />
              <label>MYSQL</label>
            </motion.div>

            <motion.div variants={item}>
              <SiJavascript color="#F0DB4F" />
              <label>JAVASCRIPT</label>
            </motion.div>

            <motion.div variants={item}>
              <SiRedux color="#764abc" />
              <label>REDUX</label>
            </motion.div>

            <motion.div variants={item}>
              <SiNodedotjs color="#3c873a" />
              <label>NODE</label>
            </motion.div>

            <motion.div variants={item}>
              <FaReact color="#0047ab" />
              <label>REACT</label>
            </motion.div>

            <motion.div variants={item}>
              <SiHtml5 color="#e34c26" />
              <label>HTML5</label>
            </motion.div>

            <motion.div variants={item}>
              <SiCss3 color="#264de4" />
              <label>CSS3</label>
            </motion.div>

            <motion.div variants={item}>
              <SiTypescript color="#264de4" />
              <label>TYPESCRIPT</label>
            </motion.div>
          </motion.div>
        </S.ContainerMotionTechs>
      </S.TechContent>
    </S.TechContainer>
  );
};
