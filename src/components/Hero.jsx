import "./Hero.css";

import TypingAnimation from "../animations/TypingAnimation";

import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function Hero() {
  return (
      <div id="hero-section" className="hero-section">
        {/* VIDEO BACKGROUND */}

        <video autoPlay loop muted playsInline className="circuit-video-bg">
          <source src="/background1.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay" />

        {/* === VIDEO BACKGROUND === */}

        <Container className="hero-text" maxWidth="lg">
          <h1 className="hero-h1">
            From <span className="circuit-span">Circuits</span> to{" "}
            <TypingAnimation text="<Code/>" />
          </h1>
          <h2 className="hero-h2">I Engineer Full-Stack Experiences</h2>
          <Button
            component="a"
            href="./Amany Elsayed (Eg).pdf"
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
  )
}
