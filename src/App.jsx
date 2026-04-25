import "./App.css";

// MATERIAL UI COMPONENTS
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// STATES
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header>
        {/* HEADER HYPERLINKS */}
        <nav>
          <h2>【=︿=】</h2>
          <ul>
            <li><a href="#about-section">About</a></li>
            <li><a href="#experience-section">Experience</a></li>
            <li><a href="#project-section">Projects</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
        {/* === HEADER HYPERLINKS === */}
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
          marginTop: "3.4rem",
        }}
      >
        hero
      </div>
      {/* === FIRST SECTION: HERO === */}
      {/* SECOND SECTION: ABOUT */}
      <div
        id="about-section"
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
        id="experience-section"
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
        id="project-section"
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
        id="contact-section"
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
