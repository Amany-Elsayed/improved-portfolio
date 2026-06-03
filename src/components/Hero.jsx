import "./Hero.css";

// ANIMATIONS
import TypingAnimation from "../animations/TypingAnimation";

// MATERIAL UI ICONS
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// VARIABLES
const ButtonSx = {
  m: 2,
  borderRadius: "18px",
  background: "rgba(33, 62, 182, 0.05)",
  border: "2px solid rgba(77, 140, 255, 0.8)",
  color: "#ffffff",
  textTransform: "none",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 10px rgba(0,140,255,0.9), 0 0 25px rgba(0,140,255,0.55)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    background: "rgba(12, 20, 46, 0.9)",
    boxShadow:
      "0 0 18px rgba(0,140,255,0.9), 0 0 40px rgba(0,140,255,0.55)",
    border: "2px solid rgba(120,180,255,1)",
  },
  "& .MuiSvgIcon-root": {
    marginRight: "0.4rem",
  },
};

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
          href="./Amany_Elsayed.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={ButtonSx}
          startIcon={<DescriptionIcon />}
        >
          show CV
        </Button>
        <Button
          component="a"
          href="#contact-section"
          variant="outlined"
          sx={ButtonSx}
          startIcon={<AlternateEmailIcon />}
        >

          
          Contact
        </Button>
        {/* === HERO BUTTONS === */}
      </Container>
    </div>
  );
}
