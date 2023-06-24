import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  background-color: white;
  padding: 1rem 2em;

  ul {
    display: flex;
    list-style: none;
    gap: 1.5em;
    font-size: 1.25em;
  }

  ul li:hover {
    cursor: pointer;
    color: #ffd700;
  }

  ul li .active {
    color: #ffd700;
    border-bottom: 3px solid #ffd700;
    padding: 0.5px 0;
  }
`;

export const LogoContainer = styled.div`
  h1 span {
    color: #ffd700;
  }
`;

export const ContactContainer = styled.div`
// MINHA LOGICA AQUI
`;
