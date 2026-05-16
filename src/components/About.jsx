import "./About.css";

// MATERIAL UI COMPONENTS
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, Typography, Divider } from "@mui/material";

// ANIMATIONS
import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";

// MATERIAL UI ICONS
import IconButton from "@mui/material/IconButton";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupIcon from "@mui/icons-material/Group";
import TerminalIcon from "@mui/icons-material/Terminal";

// STATS FOR STATS BOX
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

export default function About() {
  return (
    <>
      <div id="about-section" className="about-section">
        <Container className="about-container" maxWidth="lg">
          {/* ABOUT TEXT SECTION */}
          <Container className="about-text-section">
            {/* SECTION STARTER */}
            <RevealWrapper delay={0.5}>
              {(isVisible) => (
                <div className="about-section-starter">
                  {isVisible && <NeonLineAnimation text="ABOUT ME" />}
                </div>
              )}
            </RevealWrapper>
            {/* === SECTION STARTER === */}

            {/* SECTION TITLE */}
            <RevealWrapper delay={0.6}>
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
            {/* === SECTION TITLE === */}

            {/* THE TITLE'S LINE */}
            <RevealWrapper delay={0.7}>
              <hr className="about-hr neon-blue" />
            </RevealWrapper>
            {/* === THE TITLE'S LINE === */}

            {/* THE ABOUT ME DESCRIPTION */}
            <RevealWrapper delay={0.8}>
              <p className="about-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit pariatur eum vero sequi dignissimos? Unde harum
                facere facilis illum! Error repellat a voluptatibus praesentium
                nostrum alias beatae porro sit vero.
              </p>
            </RevealWrapper>
            {/* === THE ABOUT ME DESCRIPTION === */}

            {/* THE ABOUT ME ICON POINTS */}
            <RevealWrapper delay={0.9}>
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

            <RevealWrapper delay={1.0}>
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

            <RevealWrapper delay={1.1}>
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
            {/* === THE ABOUT ME ICON POINTS === */}

            {/* STATS BOX */}
            <RevealWrapper delay={1.2}>
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
            {/* === STATS BOX === */}
          </Container>
          {/* === ABOUT TEXT SECTION === */}

          {/* ABOUT PICTURE SECTION */}
          <Container className="about-picture-section">
            <RevealWrapper delay={1.3}>
              {/* MY PICTURE */}
              <div className="about-picture-container neon-blue-border">
                <img src="/myPicture.png" alt="My picture btw" />
              </div>
              {/* === MY PICTURE === */}

              {/* THE TERMINAL WINDOW */}
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
              {/* === THE TERMINAL WINDOW === */}
            </RevealWrapper>
          </Container>
          {/* === ABOUT PICTURE SECTION === */}
        </Container>
      </div>
    </>
  );
}
