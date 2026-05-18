import "./Contact.css";

import emailjs from "@emailjs/browser";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";

import { useRef, useState } from "react";

export default function Contact() {
  const [popperType, setPopperType] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [copyToastOpen, setCopyToastOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [sentToastOpen, setSentToastOpen] = useState(false);
  const formRef = useRef();

  const handleHover = (event, type) => {
    setAnchorEl(event.currentTarget);
    setPopperType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopperType(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("amanyelsayed@outlook.com");
    setCopyToastOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === "sent") {
      setToastOpen(true);
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        setSentToastOpen(true);
      })
      .catch(() => setStatus("error"));
  };

  // VARIABLES

  // TERMINAL CODELINES
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

  // EMAIL FORM FIELDS
  const fields = [
    {
      name: "from_name",
      placeholder: "Your Name",
      type: "text",
      icon: "person",
    },
    {
      name: "from_email",
      placeholder: "Your Email",
      type: "email",
      icon: "email",
    },
    { name: "subject", placeholder: "Subject", type: "text", icon: "subject" },
  ];

  // SOCIALS ICONS SX
  const socialSxBtn = {
    border: "1px solid #0af",
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
    cursor: "default",
    flexShrink: 0,
  };

  // POPPER BOX SX
  const popperBoxSx = {
    border: 1,
    borderRadius: 2,
    borderColor: "#001464",
    p: 1,
    bgcolor: "#00061f",
  };

  // SOCIALS FOR SOCIAL BOXES
  const socials = [
    {
      id: 1,
      boxIcon: (
        <IconButton
          className="neon-blue-button"
          aria-label="code"
          color="primary"
          sx={socialSxBtn}
        >
          <EmailIcon className="neon-blue-icon" />
        </IconButton>
      ),
      title: "EMAIL",
      link: "amanyelsayed@outlook.com",
      actionIcon: (
        <IconButton
          aria-haspopup="true"
          onMouseEnter={(e) => handleHover(e, "copy")}
          onMouseLeave={handleClose}
          onClick={handleCopy}
          aria-label="copy email"
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
                <Box sx={popperBoxSx}>Copy</Box>
              </Fade>
            )}
          </Popper>
        </IconButton>
      ),
    },
    {
      id: 2,
      boxIcon: (
        <IconButton
          className="neon-blue-button"
          aria-label="code"
          color="primary"
          sx={socialSxBtn}
        >
          <LinkedInIcon className="neon-blue-icon" />
        </IconButton>
      ),
      title: "EMAIL",
      link: "amanyelsayed@outlook.com",
      actionIcon: (
        <IconButton
          aria-haspopup="true"
          onMouseEnter={(e) => handleHover(e, "open")}
          onMouseLeave={handleClose}
          onClick={() =>
            window.open("https://www.linkedin.com/in/amany-elsayed0/", "_blank")
          }
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
                <Box sx={popperBoxSx}>Open</Box>
              </Fade>
            )}
          </Popper>
        </IconButton>
      ),
    },
    {
      id: 3,
      boxIcon: (
        <IconButton
          className="neon-blue-button"
          aria-label="code"
          color="primary"
          sx={socialSxBtn}
        >
          <GitHubIcon className="neon-blue-icon" />
        </IconButton>
      ),
      title: "EMAIL",
      link: "amanyelsayed@outlook.com",
      actionIcon: (
        <IconButton
          aria-haspopup="true"
          onMouseEnter={(e) => handleHover(e, "open")}
          onMouseLeave={handleClose}
          onClick={() =>
            window.open("https://github.com/Amany-Elsayed", "_blank")
          }
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
                <Box sx={popperBoxSx}>Open</Box>
              </Fade>
            )}
          </Popper>
        </IconButton>
      ),
    },
  ];

  // SOCAIAL BOXES DELAYS
  const socialDelays = [0.6, 0.7, 0.8];

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
              <p className="contact-get-in-touch neon-blue-text">
                Get In Touch
              </p>
            </RevealWrapper>

            {socials.map((social, index) => (
              <RevealWrapper key={social.id} delay={socialDelays[index]}>
                <div className="contact-box neon-blue-border">
                  {social.boxIcon}
                  <div className="contact-box-text">
                    <h3>{social.title}</h3>
                    <p>{social.link}</p>
                  </div>
                  <div className="contact-box-icon">{social.actionIcon}</div>
                </div>
              </RevealWrapper>
            ))}

            <RevealWrapper delay={0.9}>
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

          <Container className="contact-form-section">
            <RevealWrapper delay={1.0}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form neon-blue-border"
              >
                <h3 className="contact-form-title neon-blue-text">
                  SEND ME A MESSAGE
                </h3>

                {fields.map((f) => (
                  <div className="contact-form-input-wrapper" key={f.name}>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      required
                      className="contact-form-input"
                    />
                  </div>
                ))}

                <div className="contact-input-wrapper">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="contact-form-input contact-form-textarea"
                  />
                </div>

                <Button
                  variant="outlined"
                  type="submit"
                  className="contact-form-submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                </Button>
                {status === "error" && (
                  <p className="contact-form-error">
                    Something went wrong. Try again.
                  </p>
                )}

                <p className="contact-form-notice">
                  <LockOutlinedIcon sx={{ fontSize: "0.85rem" }} /> Your
                  Information is Secure and Private
                </p>
              </form>
            </RevealWrapper>
          </Container>

          <Snackbar
            open={copyToastOpen}
            autoHideDuration={3000}
            onClose={() => setCopyToastOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity="success"
              onClose={() => setCopyToastOpen(false)}
              sx={{
                backgroundColor: "#050816",
                color: "#fff",
                border: "1px solid rgba(0,140,255,0.4)",

                "& .MuiAlert-icon": {
                  color: "#00aaff",
                },
              }}
            >
              Email copied to clipboard!
            </Alert>
          </Snackbar>
          <Snackbar
            open={toastOpen}
            autoHideDuration={4000}
            onClose={() => setToastOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity="info"
              onClose={() => setToastOpen(false)}
              sx={{
                backgroundColor: "#050816",
                color: "#fff",
                border: "1px solid rgba(0,140,255,0.4)",

                "& .MuiAlert-icon": {
                  color: "#00aaff",
                },
              }}
            >
              You already sent a message. I'll get back to you soon!
            </Alert>
          </Snackbar>
          <Snackbar
            open={sentToastOpen}
            autoHideDuration={4000}
            onClose={() => setSentToastOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity="success"
              onClose={() => setSentToastOpen(false)}
              sx={{
                backgroundColor: "#050816",
                color: "#fff",
                border: "1px solid rgba(0,140,255,0.4)",

                "& .MuiAlert-icon": {
                  color: "#00aaff",
                },
              }}
            >
              Message sent! I'll get back to you soon.
            </Alert>
          </Snackbar>
        </Container>
      </div>
    </>
  );
}
