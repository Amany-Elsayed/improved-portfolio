import "./Experience.css";
import "../App.css"

import TypingAnimation from "../animations/TypingAnimation";
import NeonLineAnimation from "../animations/NeonLineAnimation";
import RevealWrapper from "../animations/RevealWrapper";
import ExperienceReveal from "../animations/ExperienceReveal";

import Container from "@mui/material/Container";

const experiences = [
  {
    key: 1,
    year: "2025  PRESENT",
    title: "Project Manager & Engineer",
    company: "You Can Academy",
    dates: "Aug 2025 – Present",
    location: "Remote",
    description: "Leading cross-functional teams to develop an e-learning platform. Ensuring UI/UX quality, managing project delivery milestones, and providing hands-on coding and design support.",
  },
  {
    key: 2,
    year: "2025",
    title: "MEAN Stack Developer Trainee",
    company: "National Telecommunication Institute (NTI)",
    dates: "Jul 2025 – Nov 2025",
    location: "Train-to-Hire Program / Egypt",
    description: "Completed an intensive program focused on building full-stack web applications, gaining hands-on experience with MongoDB, Express.js, Angular, and Node.js.",
  },
  {
    key: 3,
    year: "2019  2025",
    title: "B.Eng. Electronics & Communication",
    company: "Tanta University",
    dates: "2019 – 2025",
    location: "Tanta / Egypt",
    description: "Developed strong analytical, research, and problem-solving skills, building a solid engineering foundation for tackling complex software development challenges.",
  },
  {
    key: 4,
    year: "2019  PRESENT",
    title: "Freelance Developer & Designer",
    company: "Self-Employed",
    dates: "2019 – Present",
    location: "Remote",
    description: "Developing customized MEAN stack web applications, designing UI/UX assets in Figma, and delivering tailored digital solutions for diverse clients.",
  },
];

export default function Experience() {
  return (
    <>
      <div id="experience-section" className="experience-section">
        <Container className="experience-title">
          <RevealWrapper delay={0.1}>
            {(isVisible) => (
              <div className="experience-section-starter">
                {isVisible && <NeonLineAnimation text="EXPERIENCE" />}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            {(isVisible) => (
              <h1 className="experience-title">
                My Engineering
                <span className="experience-span">
                  {" "}
                  {isVisible && <TypingAnimation text="Journey" />}
                </span>
              </h1>
            )}
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p className="experience-section-title-p">
              Timeline of All my Professional Growth
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <hr className="experience-hr neon-blue" />
          </RevealWrapper>
        </Container>

        <ExperienceReveal>
          {({ beamRef, rowVisible, setRowRef, setDotRef }) => (
            <div className="experience-content">
              <div className="experience-beam-track" ref={beamRef} />

              <RevealWrapper className="experience-ground-reveal" delay={0.8}>
                <div className="experience-ground">
                  <div className="experience-inner-ground1 neon-blue"></div>
                  <div className="experience-inner-ground2 neon-blue"></div>
                  <div className="experience-inner-ground3 neon-blue"></div>
                </div>
              </RevealWrapper>

              {experiences.map((experience, i) => (
                <div key={i} className="experience-grid" ref={setRowRef(i)}>
                  <div
                    className={`experience-year-label${rowVisible.has(i) ? " row-item-visible" : ""}`}
                  >
                    <span className="experience-year">{experience.year}</span>
                  </div>

                  <div className="experience-light-beam">
                    <div
                      className={`experience-dot neon-blue${rowVisible.has(i) ? " row-item-visible" : ""}`}
                      ref={setDotRef(i)}
                    >
                      <div className="experience-inner-dot neon-blue" />
                    </div>
                  </div>

                  <div
                    className={`experience-card neon-blue-border${rowVisible.has(i) ? " row-item-visible" : ""}`}
                  >
                    <h3 className="experience-card-label">
                      {experience.title}
                    </h3>
                    <p className="experience-card-location">
                      {experience.company}
                    </p>
                    <p className="experience-card-date">
                      <span>{experience.dates}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </p>
                    <p className="experience-card-text">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ExperienceReveal>
      </div>
    </>
  );
}
