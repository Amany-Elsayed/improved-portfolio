import "./Header.css";
import "../App.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // HEADER SHOW/HIDE ANIMATION
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // === HEADER SHOW/HIDE ANIMATION ===

  return (
    <>
      <header className={showHeader ? "header-show" : "header-hide"}>
        <nav>
          {/* LOGO */}
          <div className="logo-container">
            <h2 className="logo">
              <span className="logo--top">【=︿=】</span>
              <span className="logo--bottom">【=︿=】</span>
            </h2>
          </div>
          {/* === LOGO === */}

          {/* BURGER */}
          <div
            className={`burger ${menuOpen ? "burger-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* === BURGER === */}

          {/* HEADER HYPERLINKS */}
          <ul className={`nav-list ${menuOpen ? "nav-open" : ""}`}>
            <li className="nav-list-item">
              <a href="#about-section" className="nav-list-link">
                About
              </a>
            </li>

            <li className="nav-list-item">
              <a href="#experience-section" className="nav-list-link">
                Experience
              </a>
            </li>

            <li className="nav-list-item">
              <a href="#skills-section" className="nav-list-link">
                Skills
              </a>
            </li>

            <li className="nav-list-item">
              <a href="#projects-section" className="nav-list-link">
                Projects
              </a>
            </li>

            <li className="nav-list-item">
              <a href="#contact-section" className="nav-list-link">
                Contact
              </a>
            </li>
          </ul>
          {/* === HEADER HYPERLINKS === */}
        </nav>
      </header>
    </>
  );
}
