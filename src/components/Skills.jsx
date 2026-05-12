import "./Skills.css";
import "../App.css";

import Container from "@mui/material/Container";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import SkillsTreeReveal from "../animations/SkillsTreeReveal";
import RevealWrapper from "../animations/RevealWrapper";

const skills = [
  {
    number: "01",
    icon: <CodeIcon className="neon-blue-icon" />,
    title: "FRONTEND",
    chips: ["html", "js", "css", "html", "js", "css"],
  },
  {
    number: "02",
    icon: <StorageIcon className="neon-blue-icon" />,
    title: "FRONTEND",
    chips: ["html", "js", "css", "html", "js", "css"],
  },
  {
    number: "03",
    icon: <BrushIcon className="neon-blue-icon" />,
    title: "FRONTEND",
    chips: ["html", "js", "css", "html", "js", "css"],
  },
  {
    number: "04",
    icon: <ControlPointIcon className="neon-blue-icon" />,
    title: "FRONTEND",
    chips: ["html", "js", "css", "html", "js", "css"],
  },
];

export default function Skills() {
  return (
    <>
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

        <div className="skills-tree-diagram">
          <div className="skills-tree-diagram1"></div>
          <div className="skills-tree-diagram2"></div>
          <div className="skills-tree-diagram3"></div>
          <div className="skills-tree-diagram4"></div>

          <SkillsTreeReveal />
        </div>

        <RevealWrapper className="skills-ground-reveal" delay={0.8}>
          <div className="skills-ground">
            <div className="skills-inner-ground1 neon-blue"></div>
            <div className="skills-inner-ground2 neon-blue"></div>
            <div className="skills-inner-ground3 neon-blue"></div>
          </div>
        </RevealWrapper>

        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card-wrapper">
                <div className="skills-card">
                  <div className="skills-card-header">
                    <span className="skills-card-number neon-blue-text">
                      {skill.number}
                    </span>
                    <div className="skills-card-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="skills-card-title-row">
                    <div className="skills-card-icon-box">
                      <div className="card-icon-box-inner">{skill.icon}</div>
                    </div>
                    <div>
                      <h2 className="skills-card-title">{skill.title}</h2>
                      <div className="skills-card-underline" />
                    </div>
                  </div>

                  <div className="skills-chips-grid">
                    {skill.chips.map((chip) => (
                      <div key={chip} className="skills-chip neon-border">
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
