// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: "#f4b41a";
      secundary: "#003455";
      white: "#FFFFFF";
      black: "#000000";
    };
  }
}
