import styled from "styled-components";

export const HeaderContainer = styled.header`
  z-index: 1;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  
  @media (max-width: 625px) {
    font-size: small;
  }

  @media (max-width: 500px) {
    font-size: smaller;
  }
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

export const ContactButtonContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd700;
    border: none;
    border-radius: 5px;
    gap: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 1.25em;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffd54f;
    box-shadow: 0px 7.5px 10px rgba(255, 255, 0, 0.4);
    color: #000;
    transform: translateY(-1px);
  }
`;
