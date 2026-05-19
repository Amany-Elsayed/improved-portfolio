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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from "@mui/icons-material/Terminal";

// STATS FOR STATS BOX
const stats = [
  {
    icon: <WorkspacePremiumIcon className="neon-blue-icon" fontSize="large" />,
    value: "2+",
    label: "Professional Certifications",
  },
  {
    icon: <FolderOpenIcon className="neon-blue-icon" fontSize="large" />,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: <StorageIcon className="neon-blue-icon" fontSize="large" />,
    value: "2+",
    label: "Tech Stacks",
  },
];

// ICON POINTS SX

const iconPointsBtn = {
  border: "1px solid #0af",
  width: "3rem",
  height: "3rem",
  marginRight: "1rem",
  cursor: "default",
  flexShrink: 0,
};

// ABOUT ME POINTS
const textPoints = [
  {
    id: 1,
    icon: (
      <IconButton
        className="neon-blue-button"
        aria-label="code"
        color="primary"
        sx={iconPointsBtn}
      >
        <CodeOffIcon className="neon-blue-icon" />
      </IconButton>
    ),
    title: "Full-Stack Development",
    desc: "Building scalable apps with MERN and MEAN.",
  },
  {
    id: 2,
    icon: (
      <IconButton
        className="neon-blue-button"
        aria-label="performance"
        color="primary"
        sx={iconPointsBtn}
      >
        <RocketLaunchIcon className="neon-blue-icon" />
      </IconButton>
    ),
    title: "Analytical Problem Solver",
    desc: "Engineering precise and impactful digital solutions.",
  },
  {
    id: 3,
    icon: (
      <IconButton
        className="neon-blue-button"
        aria-label="solver"
        color="primary"
        sx={iconPointsBtn}
      >
        <EmojiObjectsIcon className="neon-blue-icon" />
      </IconButton>
    ),
    title: "Modern Front-End Focused",
    desc: "Crafting responsive UIs with React and Redux.",
  },
];

// POINTS DELAYS
const pointsDelays = [0.9, 1.0, 1.1];

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
                I’m a Junior MERN/MEAN Stack Developer and an Electronics &
                Communications Engineering graduate with a strong passion for
                innovation. I blend my analytical engineering background with
                modern web technologies to build dynamic, full-stack
                applications and approach complex challenges with creativity and
                precision.
              </p>
            </RevealWrapper>
            {/* === THE ABOUT ME DESCRIPTION === */}

            {/* THE ABOUT ME ICON POINTS */}
            {textPoints.map((point, index) => (
              <RevealWrapper key={point.id} delay={pointsDelays[index]}>
                <div className="about-icon-description">
                  {point.icon}
                  <div className="about-icon-text">
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
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
                          className="about-stat-value"
                          sx={{ color: "#fff", fontWeight: "bold" }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography variant="body1" className="about-stat-label" sx={{ color: "#8899aa" }}>
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
                  background:{" "}
                  <span className="about-picture-window-span2">"Engineering"</span>
                  <br />
                  stack:{" "}
                  <span className="about-picture-window-span2">"MERN & MEAN"</span>
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
