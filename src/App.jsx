import "./App.css";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Container from "@mui/material/Container";

// MATERIAL UI ICONS
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// COMPONENTS
import InteractiveDots from "./props/InteractiveDots";

// STATES
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header>
        {/* HEADER HYPERLINKS */}
        <nav>
          <div className="logo-container">
            <h2 className="logo">
              <span className="logo--top">【=︿=】</span>
              <span className="logo--bottom">【=︿=】</span>
            </h2>
          </div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#about-section" className="nav-list-link">
                About
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#experience-section" className="nav-list-link">
                Experience
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#project-section" className="nav-list-link">
                Projects
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#contact-section" className="nav-list-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* === HEADER HYPERLINKS === */}
      </header>
      {/* === HEADER === */}
      {/* FIRST SECTION: HERO */}
      <div className="hero-section">
        {/* BACKGROUND ANIMATION */}
        <InteractiveDots
          background={{
            stops: [
              { color: "#010011", position: 0 },
              { color: "#000024", position: 0.5 },
              { color: "#070066", position: 1 },
            ],
            angle: 135, // direction in degrees (0 = left→right, 90 = top→bottom)
            animated: true, // makes it slowly shift back and forth
            speed: 0.8, // 0.1 = very slow, 1 = fast
          }}
          dotColor="#d8d8d8"
        />
        {/* == BACKGROUND ANIMATION == */}
        <Container className="hero-text" maxWidth="xl">
          <h3>Hello, Im</h3>
          <h1>Amany Elsayed</h1>
          <h2>Full Stack Web Developer</h2>
          <Button
            variant="contained"
            style={{ margin: "1rem" }}
            startIcon={<DescriptionIcon />}
          >
            show CV
          </Button>
          <Button
            variant="outlined"
            style={{ margin: "1rem" }}
            startIcon={<AlternateEmailIcon />}
          >
            Contact
          </Button>
        </Container>
      </div>
      {/* === FIRST SECTION: HERO === */}
      {/* SECOND SECTION: ABOUT */}
      <div
        id="about-section"
        style={{
          backgroundColor: "red",
          height: "100vh",
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
          height: "100vh",
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
          height: "100vh",
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
          height: "100vh",
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
