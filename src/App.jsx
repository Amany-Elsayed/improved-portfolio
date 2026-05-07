import "./App.css";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, Typography, Divider } from "@mui/material";

// MATERIAL UI ICONS
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconButton from "@mui/material/IconButton";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupIcon from "@mui/icons-material/Group";

// COMPONENTS
import TypingAnimation from "./components/TypingAnimation";
import NeonLineAnimation from "./components/NeonLineAnimation";

// VARIABLES
const stats = [
  {
    icon: <CalendarMonthIcon className="neon-blue-icon" fontSize="large" />,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: <FolderOpenIcon className="neon-blue-icon" fontSize="large" />,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: <GroupIcon className="neon-blue-icon" fontSize="large" />,
    value: "10+",
    label: "Happy Clients",
  },
];

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
            <TypingAnimation text="<Code/>" />
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
        <Container className="about-container" maxWidth="lg">
          <Container className="about-text-section">
            <div className="about-section-starter">
              <NeonLineAnimation text="ABOUT ME" />
            </div>

            <h1 className="about-title">
              Who I Am <br />&
              <span className="about-span">
                {" "}
                <TypingAnimation text="What I Do"></TypingAnimation>
              </span>
            </h1>

            <hr className="about-hr neon-blue" />

            <p className="about-p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit pariatur eum vero sequi dignissimos? Unde harum
              facere facilis illum! Error repellat a voluptatibus praesentium
              nostrum alias beatae porro sit vero.
            </p>
            <div className="about-icon-description">
              <IconButton
                className="neon-blue-button"
                aria-label="code"
                color="primary"
                sx={{
                  border: "1px solid #0af ",
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  flexShrink: 0,
                }}
              >
                <CodeOffIcon className="neon-blue-icon" />
              </IconButton>
              <div className="about-icon-text">
                <h3>Full-Stack Development</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="about-icon-description">
              <IconButton
                className="neon-blue-button"
                aria-label="performance"
                color="primary"
                sx={{
                  border: "1px solid #0af ",
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  flexShrink: 0,
                }}
              >
                <RocketLaunchIcon className="neon-blue-icon" />
              </IconButton>
              <div className="about-icon-text">
                <h3>Performance Focused</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="about-icon-description">
              <IconButton
                className="neon-blue-button"
                aria-label="solver"
                color="primary"
                sx={{
                  border: "1px solid #0af ",
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  flexShrink: 0,
                }}
              >
                <EmojiObjectsIcon className="neon-blue-icon" />
              </IconButton>
              <div className="about-icon-text">
                <h3>Problem Solver</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="about-stats-box">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #1e2a3a",
                  borderRadius: "1rem",
                  px: 3,
                  py: 2,
                  width: "max-content",
                }}
              >
                {stats.map((stat, index) => (
                  <Box
                    key={stat.label}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box sx={{ px: 3 }}>
                      <Box sx={{ color: "#4a90d9", mb: 1 }}>{stat.icon}</Box>
                      <Typography
                        variant="h5"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="p" sx={{ color: "#8899aa" }}>
                        {stat.label}
                      </Typography>
                    </Box>
                    {index < stats.length - 1 && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#1e2a3a", height: "120px" }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </div>
          </Container>
          <Container className="about-picture-section">
            <div className="about-picture-container neon-blue-border">
              <img src="/myPicture.png" alt="My picture btw" />
            </div>
            <div className="about-picture-window neon-blue-border"></div>
          </Container>
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
