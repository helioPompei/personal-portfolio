// CSS
import "./App.css";
// REACT ROUTER
import { BrowserRouter, Route, Routes } from "react-router-dom";
// COMPONENTS
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// PAGES
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<AboutMe />} />
        </Routes>
        <ContactMe />
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
