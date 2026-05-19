import "../App.css";
import "./Projects.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import RevealWrapper from "../animations/RevealWrapper";
import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import ProjectsTreeReveal from "../animations/ProjectsTreeReveal";

const projects = [
  {
    number: "01",
    pic: "./project1.png",
    section: "FULL-STACK",
    title: "Chats-App",
    desc: "A full-stack real-time chat application built with the MEAN stack featuring WebSocket support for instant messaging.",
    chips: ["NodeJS", "ExpressJS", "MongoDB", "Angular", "Bootstrap"],
    gitButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed/Chats-App"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Open GitHub
      </Button>
    ),
    openButton: (
      <Button
        component="a"
        href=""
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
        disabled
        sx={{ textDecoration: "line-through" }}
      >
        Try It Out
      </Button>
    ),
  },
  {
    number: "02",
    pic: "./project2.png",
    section: "PYTHON",
    title: "AI Grading Model",
    desc: "A simple AI program that takes exams and scores pragraph questions and saves the score of each student seperatly",
    chips: ["Python", "AI", "API"],
    gitButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed/AI-Grading-Model"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Open GitHub
      </Button>
    ),
    openButton: (
      <Button
        component="a"
        href="https://ai-grading-api.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Try It Out
      </Button>
    ),
  },
  {
    number: "03",
    pic: "/project3.png",
    section: "FULL-STACK",
    title: "portfolio",
    desc: "a simple protfolio design using css, js, and html",
    chips: ["html", "js", "css", "html"],
    gitButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Open GitHub
      </Button>
    ),
    openButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Try It Out
      </Button>
    ),
  },
  {
    number: "04",
    pic: "/project4.png",
    section: "FULL-STACK",
    title: "portfolio",
    desc: "a simple protfolio design using css, js, and html",
    chips: ["Python", "AI", "API"],
    gitButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Open GitHub
      </Button>
    ),
    openButton: (
      <Button
        component="a"
        href="https://github.com/Amany-Elsayed"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        className="project-card-btn"
      >
        Try It Out
      </Button>
    ),
  },
];

const cardDelays = [0.1, 0.25, 0.3, 0.45];

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

        <div className="projects-tree-diagram">
          <div className="projects-tree-diagram1"></div>
          <div className="projects-tree-diagram2"></div>
          <div className="projects-tree-diagram3"></div>
          <div className="projects-tree-diagram4"></div>

          <ProjectsTreeReveal />
        </div>

        <RevealWrapper className="projects-ground-reveal" delay={0.8}>
          <div className="projects-ground">
            <div className="projects-inner-ground1 neon-blue"></div>
            <div className="projects-inner-ground2 neon-blue"></div>
            <div className="projects-inner-ground3 neon-blue"></div>
          </div>
        </RevealWrapper>

        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <RevealWrapper key={project.number} delay={cardDelays[index]}>
                <div className="projects-card-wrapper">
                  <div className="projects-card">
                    <div className="project-pic">
                      <img
                        src={project.pic}
                        alt={`project ${project.number}`}
                      />
                    </div>

                    <div className="projects-card-header">
                      <span className="projects-card-number neon-blue-text">
                        {project.number}
                      </span>
                      <span className="projects-card-section">
                        {project.section}
                      </span>
                    </div>

                    <div className="projects-card-title-row">
                      <div>
                        <h2 className="projects-card-title">{project.title}</h2>
                        <p>{project.desc}</p>
                      </div>
                    </div>

                    <div className="projects-chips-grid">
                      {project.chips.map((chip, chipIndex) => (
                        <div
                          key={chipIndex}
                          className="projects-chip neon-border"
                        >
                          {chip}
                        </div>
                      ))}
                    </div>

                    <div className="projects-hover-overlay">
                      <div className="projects-bottons-container">
                        {project.gitButton}
                        {project.openButton}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
