import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar {
      color: blue;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.primary};
      border: 2px solid #fff;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(p) => p.theme.colors.secundary};
    }

    -webkit-tap-highlight-color: transparent;
  }
`;
