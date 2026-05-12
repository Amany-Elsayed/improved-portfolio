import "../App.css";
import "./Projects.css";

import Container from "@mui/material/Container";

import RevealWrapper from "../animations/RevealWrapper";
import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";

export default function Projects() {
  return (
    <>
      <div id="projects-section" className="projects-section">
        <Container className="projects-title">
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="projects-section-starter">
                {isVisible && <NeonLineAnimation text="PROJECTS" />}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            {(isVisible) => (
              <h1 className="projects-title">
                Projects &
                <span className="projects-span">
                  {" "}
                  {isVisible && <TypingAnimation text="Creations" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p className="projects-section-title-p">
              A Showcase of the work I've Built
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="projects-hr neon-blue" />
          </RevealWrapper>
        </Container>
      </div>
    </>
  );
}
