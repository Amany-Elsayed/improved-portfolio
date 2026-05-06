import "./App.css";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Container from "@mui/material/Container";

// MATERIAL UI ICONS
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconButton from "@mui/material/IconButton";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

// COMPONENTS
import CodeSpanAnimation from "./components/CodeSpanAnimation";

// STATES
// import { useEffect, useState } from "react";

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
        {/* VIDEO BACKGROUND */}

        <video autoPlay loop muted playsInline className="circuit-video-bg">
          <source src="/background1.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay" />

        {/* === VIDEO BACKGROUND === */}

        <Container className="hero-text" maxWidth="lg">
          <h1 className="hero-h1">
            From <span className="circuit-span">Circuits</span> to{" "}
            <CodeSpanAnimation />
          </h1>
          <h2 className="hero-h2">I Engineer Full-Stack Experiences</h2>
          <Button
            component="a"
            href="../public/Amany Elsayed (Eg).pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            style={{ margin: "1rem" }}
            startIcon={<DescriptionIcon />}
          >
            show CV
          </Button>
          <Button
            component="a"
            href="#contact-section"
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
      <div className="about-section">
        <Container className="about-text-section">
          <div className="about-section-starter">
            <div className="about-section-starter-animation">-&gt;</div>
            <div className="about-section-starter-text">ABOUT ME</div>
          </div>

          <h1 className="about-title">
            Who I Am & <span className="about-span">What I Do</span>
          </h1>
          <hr className="about-hr" />
          <p className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit pariatur eum vero sequi dignissimos? Unde harum facere
            facilis illum! Error repellat a voluptatibus praesentium nostrum
            alias beatae porro sit vero.
          </p>
          <div className="about-icon-description">
            <IconButton
              aria-label="code"
              color="primary"
              sx={{
                border: "1px solid #0af ",
                width: "3rem",
                height: "3rem",
                marginRight: "2rem",
                marginTop: "2rem"
              }}
            >
              <CodeOffIcon />
            </IconButton>
            <div className="about-icon-text">
              <h3>Full-Stack Development</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="about-icon-description">
            <IconButton
              aria-label="performance"
              color="primary"
              sx={{
                border: "1px solid #0af ",
                width: "3rem",
                height: "3rem",
                marginRight: "2rem",
                marginTop: "2rem"
              }}
            >
              <RocketLaunchIcon />
            </IconButton>
            <div className="about-icon-text">
              <h3>Performance Focused</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="about-icon-description">
            <IconButton
              aria-label="solver"
              color="primary"
              sx={{
                border: "1px solid #0af ",
                width: "3rem",
                height: "3rem",
                marginRight: "2rem",
                marginTop: "2rem"
              }}
            >
              <EmojiObjectsIcon />
            </IconButton>
            <div className="about-icon-text">
              <h3>Problem Solver</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </Container>
        <Container className="about-picture">
          {/* <img src="/myPicture.png" alt="my picture btw" /> */}
        </Container>
      </div>
      {/* === SECOND SECTION: ABOUT === */}
      {/* THIRD SECTION: EXPERIENCE */}
      <div
        className="experience-section"
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
        className="project-section"
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
        className="contact-section"
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
