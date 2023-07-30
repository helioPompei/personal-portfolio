import Hamburger from "hamburger-react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import * as S from "./styles";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoContainer>
          <h1>
            &lt;Helio.<span>DEV</span> /&gt;
          </h1>
        </S.LogoContainer>

        <S.NavContainer isOpen={isOpen}>
          <Link smooth={true} spy={true} offset={-100} to="home">
            Home
          </Link>

          <Link smooth={true} spy={true} offset={-100} to="projects">
            Projetos
          </Link>

          <Link smooth={true} spy={true} offset={-100} to="about">
            Sobre
          </Link>

          <S.StyledLink smooth={true} spy={true} offset={0} to="contact">
            <AiOutlineMail />
            <p>Contato</p>
          </S.StyledLink>
        </S.NavContainer>

        <S.StyledHamburgerContainer>
          <Hamburger toggled={isOpen} rounded toggle={setOpen} />
        </S.StyledHamburgerContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
