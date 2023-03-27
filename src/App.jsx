import Header from "./components/Header";
import { useState } from "react";
import Cursos from "./components/Cursos";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [inEsp, setInEsp] = useState(true);

  const changeDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  const changeLanguage = () => {
    inEsp ? setInEsp(false) : setInEsp(true);
  };

  return (
    <div
      className={
        darkMode
          ? "App min-h-screen bg-stone-900 relative"
          : "App min-h-screen bg-stone-100 relative"
      }
    >
      <Header
        darkMode={darkMode}
        changeDarkMode={changeDarkMode}
        inEsp={inEsp}
        changeLanguage={changeLanguage}
      />
      <Container title={inEsp ? "Sobre mi" : "About me"} darkMode={darkMode}>
        <AboutMe inEsp={inEsp} darkMode={darkMode} />
      </Container>
      <Container title={"Portfolio"} darkMode={darkMode}>
        <Portfolio inEsp={inEsp} darkMode={darkMode} />
      </Container>
      <Container
        title={inEsp ? "Certificados" : "Certificates"}
        darkMode={darkMode}
      >
        <Cursos />
      </Container>
      <div className="h-12"></div>
    </div>
  );
}

export default App;
