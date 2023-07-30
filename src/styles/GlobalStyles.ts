import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  hmtl {
    font-size: 62.5%; // sets 1rem = 10px
  }
`;
