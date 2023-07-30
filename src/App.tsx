// Styles
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";
// Components
import { Header } from "./components/Header";
// Pages - Sections
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
