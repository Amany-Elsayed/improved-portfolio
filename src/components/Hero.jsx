import "./Hero.css";

// ANIMATIONS
import TypingAnimation from "../animations/TypingAnimation";

// MATERIAL UI ICONS
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// MATERIAL UI COMPONENTS
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
          {/* HERO TEXT */}
          <h1 className="hero-h1">
            From <span className="circuit-span">Circuits</span> to{" "}
            <TypingAnimation text="<Code/>" />
          </h1>
          <h2 className="hero-h2">I Engineer Full-Stack Experiences</h2>
          {/* === HERO TEXT === */}

          {/* HERO BUTTONS */}
          <Button
            component="a"
            href="./Amany_Elsayed_Eg.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ m: 2 }}
            startIcon={<DescriptionIcon />}
          >
            show CV
          </Button>
          <Button
            component="a"
            href="#contact-section"
            variant="outlined"
            sx={{ m: 2 }}
            startIcon={<AlternateEmailIcon />}
          >
            Contact
          </Button>
          {/* === HERO BUTTONS === */}
        </Container>
      </div>
  )
}
