import * as S from "./styles";
import { Link } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoContainer>
          <h1>
            Helio.<span>DEV</span>
          </h1>
        </S.LogoContainer>

        <ul>
          <li>
            <Link smooth={true} spy={true} to="home">
              Home
            </Link>
          </li>
          <li>
            <Link smooth={true} spy={true} offset={-100} to="projects">
              Projetos
            </Link>
          </li>
          <li>
            <Link smooth={true} spy={true} offset={-100} to="about">
              Sobre
            </Link>
          </li>
        </ul>

        <S.ContactButtonContainer>
          <Link smooth={true} spy={true} offset={10} to="contact">
            <AiOutlineMail />
            <p>Contato</p>
          </Link>
        </S.ContactButtonContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
