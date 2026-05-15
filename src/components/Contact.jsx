import "./Contact.css";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";

export default function Contact() {
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
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <ContentCopyIcon />
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
                  <EmailIcon className="neon-blue-icon" />
                </IconButton>
                <div className="contact-box-text">
                  <h3>EMAIL</h3>
                  <p>amanyelsayed@outlook.com</p>
                </div>
                <div className="contact-box-icon">
                  <IconButton
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <ContentCopyIcon />
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
                  <EmailIcon className="neon-blue-icon" />
                </IconButton>
                <div className="contact-box-text">
                  <h3>EMAIL</h3>
                  <p>amanyelsayed@outlook.com</p>
                </div>
                <div className="contact-box-icon">
                  <IconButton
                    aria-label="code"
                    color="primary"
                    className="neon-blue-icon"
                  >
                    <ContentCopyIcon />
                  </IconButton>
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
