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
import TerminalIcon from "@mui/icons-material/Terminal";

// COMPONENTS
import TypingAnimation from "./components/TypingAnimation";
import NeonLineAnimation from "./components/NeonLineAnimation";
import RevealWrapper from "./components/RevealWrapper";
import ExperienceReveal from "./components/ExperienceReveal";
import "./components/ExperienceReveal.css";

// HOOKS
import { useEffect } from "react";

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

const experiences = [
  {
    year: "2026",
    title: "Full Stack Engineer",
    company: "TechNova Solutions",
    dates: "Jan 2025 – Present",
    location: "Remote",
    description: "Building scalable web applications with modern technologies.",
  },
  {
    year: "2026",
    title: "Full Stack Engineer",
    company: "TechNova Solutions",
    dates: "Jan 2025 – Present",
    location: "Remote",
    description: "Building scalable web applications with modern technologies.",
  },
  {
    year: "2026",
    title: "Full Stack Engineer",
    company: "TechNova Solutions",
    dates: "Jan 2025 – Present",
    location: "Remote",
    description: "Building scalable web applications with modern technologies.",
  },
  {
    year: "2026",
    title: "Full Stack Engineer",
    company: "TechNova Solutions",
    dates: "Jan 2025 – Present",
    location: "Remote",
    description: "Building scalable web applications with modern technologies.",
  },
];

// === VARIABLES ===

function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

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
              <a href="#skills-section" className="nav-list-link">
                Skills
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
      <div id="about-section" className="about-section">
        <Container className="about-container" maxWidth="lg">
          <Container className="about-text-section">
            <RevealWrapper delay={0.1}>
              {(isVisible) => (
                <div className="about-section-starter">
                  {isVisible && <NeonLineAnimation text="ABOUT ME" />}
                </div>
              )}
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              {(isVisible) => (
                <h1 className="about-title">
                  Who I Am &
                  <span className="about-span">
                    {" "}
                    {isVisible && <TypingAnimation text="What I Do" />}
                  </span>
                </h1>
              )}
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <hr className="about-hr neon-blue" />
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <p className="about-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit pariatur eum vero sequi dignissimos? Unde harum
                facere facilis illum! Error repellat a voluptatibus praesentium
                nostrum alias beatae porro sit vero.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.5}>
              <div className="about-icon-description">
                <IconButton
                  className="neon-blue-button"
                  aria-label="code"
                  color="primary"
                  sx={{
                    border: "1px solid #0af",
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    cursor: "default",
                    flexShrink: 0,
                  }}
                >
                  <CodeOffIcon className="neon-blue-icon" />
                </IconButton>
                <div className="about-icon-text">
                  <h3>Full-Stack Development</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.6}>
              <div className="about-icon-description">
                <IconButton
                  className="neon-blue-button"
                  aria-label="performance"
                  color="primary"
                  sx={{
                    border: "1px solid #0af",
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    cursor: "default",
                    flexShrink: 0,
                  }}
                >
                  <RocketLaunchIcon className="neon-blue-icon" />
                </IconButton>
                <div className="about-icon-text">
                  <h3>Performance Focused</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.7}>
              <div className="about-icon-description">
                <IconButton
                  className="neon-blue-button"
                  aria-label="solver"
                  color="primary"
                  sx={{
                    border: "1px solid #0af",
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    cursor: "default",
                    flexShrink: 0,
                  }}
                >
                  <EmojiObjectsIcon className="neon-blue-icon" />
                </IconButton>
                <div className="about-icon-text">
                  <h3>Problem Solver</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.8}>
              <div className="about-stats-box">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "transparent",
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
            </RevealWrapper>
          </Container>

          <Container className="about-picture-section">
            <RevealWrapper delay={0.3}>
              <div className="about-picture-container neon-blue-border">
                <img src="/myPicture.png" alt="My picture btw" />
              </div>
              <div className="about-picture-window neon-blue-border">
                <TerminalIcon
                  className="about-picture-window-icon neon-blue-icon"
                  fontSize="large"
                />
                <p className="about-picture-window-text">
                  <span className="about-picture-window-span1">const</span>{" "}
                  developer = &#123;
                  <br />
                  passion:{" "}
                  <span className="about-picture-window-span2">"Code"</span>
                  <br />
                  focus:{" "}
                  <span className="about-picture-window-span2">"Build"</span>
                  <br />
                  mission:{" "}
                  <span className="about-picture-window-span2">"Impact"</span>
                  <br />
                  &#125;
                </p>
              </div>
            </RevealWrapper>
          </Container>
        </Container>
      </div>
      {/* === SECOND SECTION: ABOUT === */}

      {/* THIRD SECTION: EXPERIENCE */}
      <div id="experience-section" className="experience-section">
        <Container className="experience-title">
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="experience-section-starter">
                {isVisible && <NeonLineAnimation text="EXPERIENCE" />}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            {(isVisible) => (
              <h1 className="experience-title">
                My Engineering
                <span className="experience-span">
                  {" "}
                  {isVisible && <TypingAnimation text="Journey" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p className="experience-section-title-p">
              Timeline of All my Professional Growth
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="experience-hr neon-blue" />
          </RevealWrapper>
        </Container>

        <ExperienceReveal>
          {({ beamRef, rowVisible, setRowRef, setDotRef }) => (
            <div className="experience-content">
              <div className="experience-beam-track" ref={beamRef} />

              <RevealWrapper className="experience-ground-reveal" delay={0.8}>
                <div className="experience-ground">
                  <div className="experience-inner-ground1 neon-blue"></div>
                  <div className="experience-inner-ground2 neon-blue"></div>
                  <div className="experience-inner-ground3 neon-blue"></div>
                </div>
              </RevealWrapper>

              {experiences.map((experience, i) => (
                <div key={i} className="experience-grid" ref={setRowRef(i)}>
                  <div
                    className={`experience-year-label${rowVisible.has(i) ? " row-item-visible" : ""}`}
                  >
                    <span className="experience-year">{experience.year}</span>
                  </div>

                  <div className="experience-light-beam">
                    <div
                      className={`experience-dot neon-blue${rowVisible.has(i) ? " row-item-visible" : ""}`}
                      ref={setDotRef(i)}
                    >
                      <div className="experience-inner-dot neon-blue" />
                    </div>
                  </div>

                  <div
                    className={`experience-card neon-blue-border${rowVisible.has(i) ? " row-item-visible" : ""}`}
                  >
                    <h3 className="experience-card-label">
                      {experience.title}
                    </h3>
                    <p className="experience-card-location">
                      {experience.company}
                    </p>
                    <p className="experience-card-date">
                      <span>{experience.dates}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </p>
                    <p className="experience-card-text">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ExperienceReveal>

      </div>
      {/* === THIRD SECTION: EXPERIENCE */}

      {/* FOURTH SECTION: SKILLS */}
      <div id="skills-section" className="skills-section">
        <Container className="skills-title">
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="skills-section-starter">
                {isVisible && <NeonLineAnimation text="SKILLS" />}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            {(isVisible) => (
              <h1 className="skills-title">
                Skills &
                <span className="skills-span">
                  {" "}
                  {isVisible && <TypingAnimation text="Expertise" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p className="skills-section-title-p">
              Technologies I've Mastered Along the Way 
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="skills-hr neon-blue" />
          </RevealWrapper>

        </Container>
      </div>
      {/* === FOURTH SECTION: SKILLS === */}

      {/* FIFTH SECTION: PROJECTS */}
      <div
        id="project-section"
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
      {/* === FIFTH SECTION: PROJECTS === */}

      {/* SIXTH SECTION: CONTACTS */}
      <div
        id="contact-section"
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
