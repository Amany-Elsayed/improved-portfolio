import "./App.css"

// COMPONENTS
import Header from "./components/Header"
import About from "./components/About"
import Hero from "./components/Hero"
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// HOOKS
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* === HEADER === */}

      {/* FIRST SECTION: HERO */}
      <Hero />
      {/* === FIRST SECTION: HERO === */}

      {/* SECOND SECTION: ABOUT */}
      <About />
      {/* === SECOND SECTION: ABOUT === */}

      {/* THIRD SECTION: EXPERIENCE */}
      <Experience />
      {/* === THIRD SECTION: EXPERIENCE */}

      {/* FOURTH SECTION: SKILLS */}
      <Skills />
      {/* === FOURTH SECTION: SKILLS === */}

      {/* FIFTH SECTION: PROJECTS */}
      <Projects />
      {/* === FIFTH SECTION: PROJECTS === */}

      {/* SIXTH SECTION: CONTACTS */}
      <Contact />
      {/* === SIXTH SECTION: CONTACTS */}

      {/* FOOTER */}
      <footer
        style={{
          height: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        footer
      </footer>
      {/* === FOOTER === */}
    </div>
  );
}

export default App;
