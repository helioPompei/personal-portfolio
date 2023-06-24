import * as S from "./styles";
import {
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoHtml5,
} from "react-icons/io";
import { FaReact } from "react-icons/fa";

export const Techs = () => {
  return (
    <S.TechContainer>
      <S.TechContent>
        <S.TechTitle>
          <h1>Minhas Tecnologias</h1>
        </S.TechTitle>
        <div>
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <IoLogoJavascript />
          <FaReact />
          <IoLogoNodejs />
        </div>
      </S.TechContent>
    </S.TechContainer>
  );
};
