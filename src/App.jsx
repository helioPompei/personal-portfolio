// CSS
import "./App.css";
// REACT ROUTER
import { BrowserRouter, Route, Routes } from "react-router-dom";
// COMPONENTS
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
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
      </BrowserRouter>
    </div>
  );
};

export default App;
