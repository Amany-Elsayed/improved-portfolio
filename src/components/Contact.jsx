import "./Contact.css";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";

import { useState } from "react";

export default function Contact() {
  const [popperType, setPopperType] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = (event, type) => {
    setAnchorEl(event.currentTarget);
    setPopperType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopperType(null);
  };

  const codeLines = [
    {
      number: "01",
      content: [
        { text: `const `, color: "purple" },
        { text: `status = {`, color: "blue" },
      ],
    },
    {
      number: "02",
      content: [
        { text: `    responseTime: `, color: "blue" },
        { text: `"24 Hours"`, color: "green" },
      ],
    },
    {
      number: "03",
      content: [
        { text: `    collaboration: `, color: "blue" },
        { text: `"Open"`, color: "green" },
      ],
    },
    {
      number: "04",
      content: [
        { text: `    location: `, color: "blue" },
        { text: `"Worldwide"`, color: "green" },
      ],
    },
    { number: "05", content: [{ text: `}`, color: "blue" }] },
  ];

  return (
    <>
      <div id="contact-section" className="contact-section">
        <Container className="contact-section-title">
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="contact-section-starter">
                {isVisible && <NeonLineAnimation text="CONTACT ME" />}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            {(isVisible) => (
              <h1 className="contact-title">
                Let's Build The
                <span className="contact-span">
                  {" "}
                  {isVisible && <TypingAnimation text="Future Together" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="contact-hr neon-blue" />
          </RevealWrapper>
        </Container>

        <Container className="contact-content" maxWidth="lg">
          <Container className="contact-information-section">
            <RevealWrapper delay={0.4}>
              <p className="contact-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit pariatur eum vero sequi dignissimos? Unde harum
                facere facilis illum! Error repellat a voluptatibus praesentium
                nostrum alias beatae porro sit vero.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.5}>
              <p className="contact-get-in-touch neon-blue-text">Get In Touch</p>
            </RevealWrapper>

            <RevealWrapper delay={0.5}>
              <div className="contact-box neon-blue-border">
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
                  <EmailIcon className="neon-blue-icon" />
                </IconButton>
                <div className="contact-box-text">
                  <h3>EMAIL</h3>
                  <p>amanyelsayed@outlook.com</p>
                </div>
                <div className="contact-box-icon">
                  <IconButton
                    aria-haspopup="true"
                    onMouseEnter={(e) => handleHover(e, "copy")}
                    onMouseLeave={handleClose}
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <ContentCopyIcon />
                    <Popper
                      id="mouse-over-copy-popper"
                      open={popperType === "copy"}
                      anchorEl={anchorEl}
                      placement="right"
                      sx={{ pointerEvents: "none", zIndex: 100 }}
                      container={document.body}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 2,
                              borderColor: "#001464",
                              p: 1,
                              bgcolor: "#00061f",
                            }}
                          >
                            Copy
                          </Box>
                        </Fade>
                      )}
                    </Popper>
                  </IconButton>
                </div>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={0.6}>
              <div className="contact-box neon-blue-border">
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
                  <LinkedInIcon className="neon-blue-icon" />
                </IconButton>
                <div className="contact-box-text">
                  <h3>EMAIL</h3>
                  <p>amanyelsayed@outlook.com</p>
                </div>
                <div className="contact-box-icon">
                  <IconButton
                    aria-haspopup="true"
                    onMouseEnter={(e) => handleHover(e, "open")}
                    onMouseLeave={handleClose}
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <OpenInNewIcon />
                    <Popper
                      id="mouse-over-open-popper"
                      open={popperType === "open"}
                      anchorEl={anchorEl}
                      placement="right"
                      sx={{ pointerEvents: "none", zIndex: 100 }}
                      container={document.body}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 2,
                              borderColor: "#001464",
                              p: 1,
                              bgcolor: "#00061f",
                            }}
                          >
                            Open
                          </Box>
                        </Fade>
                      )}
                    </Popper>
                  </IconButton>
                </div>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={0.7}>
              <div className="contact-box neon-blue-border">
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
                  <GitHubIcon className="neon-blue-icon" />
                </IconButton>
                <div className="contact-box-text">
                  <h3>EMAIL</h3>
                  <p>amanyelsayed@outlook.com</p>
                </div>
                <div className="contact-box-icon">
                  <IconButton
                    aria-haspopup="true"
                    onMouseEnter={(e) => handleHover(e, "open")}
                    onMouseLeave={handleClose}
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <OpenInNewIcon />
                    <Popper
                      id="mouse-over-open-popper"
                      open={popperType === "open"}
                      anchorEl={anchorEl}
                      placement="right"
                      sx={{ pointerEvents: "none", zIndex: 100 }}
                      container={document.body}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 2,
                              borderColor: "#001464",
                              p: 1,
                              bgcolor: "#00061f",
                            }}
                          >
                            Open
                          </Box>
                        </Fade>
                      )}
                    </Popper>
                  </IconButton>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.8}>
              <div className="contact-availability-card neon-blue-border">
                <div className="contact-availability-header">
                  <span className="contact-availability-title">
                    AVAILABILITY
                  </span>
                  <span className="contact-availability-status">
                    <span className="contact-status-dot" />
                    Available for work
                  </span>
                </div>
                <div className="contact-code-block">
                  {codeLines.map((line, i) => (
                    <div className="contact-code-line" key={i}>
                      <span className="contact-line-number">{line.number}</span>
                      <span className="contact-line-content">
                        {line.content.map((segment, j) => (
                          <span
                            key={j}
                            className={`contact-code-${segment.color}`}
                          >
                            {segment.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </Container>

          <Container className="contact-form-section"></Container>
        </Container>
      </div>
    </>
  );
}
