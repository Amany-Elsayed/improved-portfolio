import "./Skills.css";
import "../App.css";

// MATERIEL UI COMPONENTS
import Container from "@mui/material/Container";

// MATERIAL UI ICONS
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

// ANIMATIONS
import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import SkillsTreeReveal from "../animations/SkillsTreeReveal";
import RevealWrapper from "../animations/RevealWrapper";

// SKILLS CONTENT
const skills = [
  {
    number: "01",
    icon: <CodeIcon className="neon-blue-icon" />,
    title: "FRONTEND",
    chips: ["Angular", "React JS", "HTML", "CSS", "BootStrap", "Material UI"],
  },
  {
    number: "02",
    icon: <StorageIcon className="neon-blue-icon" />,
    title: "BACKEND",
    chips: ["Node JS", "Express JS", "PHP", "Laravel", "Python", "C++"],
  },
  {
    number: "03",
    icon: <BrushIcon className="neon-blue-icon" />,
    title: "TOOLS & PLATFORMS",
    chips: ["VS Code", "Postman", "Git/GitHub", "PhotoShop", "Figma"],
  },
  {
    number: "04",
    icon: <ControlPointIcon className="neon-blue-icon" />,
    title: "OTHERS",
    chips: ["Software", "Hardware", "Debugging", "CST Studio", "Proteus", "Office"],
  },
];

// SKILLS CARDS DELAYS
const cardDelays = [0.1, 0.25, 0.4, 0.55];

export default function Skills() {
  return (
    <>
      <div id="skills-section" className="skills-section">
        {/* SKILLS TITLE SECTION */}
        <Container className="skills-title">
          {/* SECTION STARTER */}
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="skills-section-starter">
                {isVisible && <NeonLineAnimation text="SKILLS" />}
              </div>
            )}
          </RevealWrapper>
          {/* === SECTION STARTER === */}

          {/* SECTION TITLE */}
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
          {/* === SECTION TITLE === */}

          {/* SECTION SUBTITLE */}
          <RevealWrapper delay={0.3}>
            <p className="skills-section-title-p">
              Technologies I've Mastered Along the Way
            </p>
          </RevealWrapper>
          {/* === SECTION SUBTITLE === */}

          {/* THE TITLE'S LINE */}
          <RevealWrapper delay={0.3}>
            <hr className="skills-hr neon-blue" />
          </RevealWrapper>
          {/* THE TITLE'S LINE */}
        </Container>
        {/* === SKILLS TITLE SECTION === */}

        {/* SKILLS TREE DIAGRAM */}
        <div className="skills-tree-diagram">
          <div className="skills-tree-diagram1"></div>
          <div className="skills-tree-diagram2"></div>
          <div className="skills-tree-diagram3"></div>
          <div className="skills-tree-diagram4"></div>

          <SkillsTreeReveal />
        </div>
        {/* === SKILLS TREE DIAGRAM === */}

        {/* GROUND SYMBOL */}
        <RevealWrapper className="skills-ground-reveal" delay={0.8}>
          <div className="skills-ground">
            <div className="skills-inner-ground1 neon-blue"></div>
            <div className="skills-inner-ground2 neon-blue"></div>
            <div className="skills-inner-ground3 neon-blue"></div>
          </div>
        </RevealWrapper>
        {/* === GROUND SYMBOL === */}

        {/* SKILLS CARDS */}
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <RevealWrapper key={skill.number} delay={cardDelays[index]}>
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
                      {skill.chips.map((chip, chipIndex) => (
                        <div key={chipIndex} className="skills-chip neon-border">
                          {chip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
        {/* === SKILLS CARDS === */}
      </div>
    </>
  );
}