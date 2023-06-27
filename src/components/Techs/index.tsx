import * as S from "./styles";
import {
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoHtml5,
} from "react-icons/io";
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
        <S.TechTitle>
          <h1>Minhas Tecnologias</h1>
        </S.TechTitle>
        <S.ContainerMotionTechs>
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <IoLogoJavascript color="#F0DB4F" />
            </motion.div>

            <motion.div variants={item}>
              <IoLogoNodejs color="#3c873a" />
            </motion.div>

            <motion.div variants={item}>
              <FaReact color="#0047ab" />
            </motion.div>

            <motion.div variants={item}>
              <IoLogoHtml5 color="#e34c26" />
            </motion.div>

            <motion.div variants={item}>
              <IoLogoCss3 color="#264de4" />
            </motion.div>
          </motion.div>
        </S.ContainerMotionTechs>
      </S.TechContent>
    </S.TechContainer>
  );
};
