function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "blue",
          height: "3.4rem",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        head
      </header>
      {/* === HEADER === */}
      {/* FIRST SECTION: HERO */}
      <div
        className="Hero-section"
        style={{
          backgroundColor: "green",
          height: "30rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "3.4rem"
        }}
      >
        hero
      </div>
      {/* === FIRST SECTION: HERO === */}
      {/* SECOND SECTION: ABOUT */}
      <div
        className="about-section"
        style={{
          backgroundColor: "red",
          height: "30rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        about
      </div>
      {/* === SECOND SECTION: ABOUT === */}
      {/* THIRD SECTION: EXPERIENCE */}
      <div
        className="experience-section"
        style={{
          backgroundColor: "purple",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        experience
      </div>
      {/* === THIRD SECTION: EXPERIENCE */}
      {/* FOURTH SECTION: PROJECTS */}
      <div
        className="project-section"
        style={{
          backgroundColor: "yellow",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        projects
      </div>
      {/* === FOURTH SECTION: PROJECTS === */}
      {/* FIFTH SECTION: CONTACTS */}
      <div
        className="contact-section"
        style={{
          backgroundColor: "darkcyan",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        contact
      </div>
      {/* === FIFTH SECTION: CONTACTS */}
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
