import "./Contact.css";

import Container from "@mui/material/Container";

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";

export default function Contact() {
  return (
    <>
      <div id="contact-section" className="contact-section">
        <Container className="contact-title">
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
                  {isVisible && <TypingAnimation text="Futur Together" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="contact-hr neon-blue" />
          </RevealWrapper>
        </Container>
        <Container className="contact-content" maxWidth="lg"></Container>
      </div>
    </>
  );
}
