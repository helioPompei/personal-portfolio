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
            <Link smooth={true} spy={true} offset={10} to="home">
              Home
            </Link>
          </li>
          <li>
            <Link smooth={true} spy={true} offset={10} to="projects">
              Sobre
            </Link>
          </li>
          <li>
            <Link smooth={true} spy={true} offset={10} to="about">
              Projetos
            </Link>
          </li>
        </ul>

        <S.ContactContainer>
          
          <Link smooth={true} spy={true} offset={10} to="about">
          <AiOutlineMail />
            <p>Contato</p>
          </Link>
        </S.ContactContainer>
        
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
