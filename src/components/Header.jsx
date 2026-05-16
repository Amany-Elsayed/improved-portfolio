import "./Header.css";
import "../App.css";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [logoActive, setLogoActive] = useState(false);

  // HYPERLINKS
  const navLinks = [
    { href: "#about-section", label: "About" },
    { href: "#experience-section", label: "Experience" },
    { href: "#skills-section", label: "Skills" },
    { href: "#projects-section", label: "Projects" },
    { href: "#contact-section", label: "Contact" },
  ];

  // HEADER SHOW/HIDE ANIMATION
  const lastScrollRef = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(
        !(currentScroll > lastScrollRef.current && currentScroll > 80),
      );
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // === HEADER SHOW/HIDE ANIMATION ===

  const handleLogoClick = () => {
    if (window.innerWidth > 900) return;
    setLogoActive(true);
    setTimeout(() => setLogoActive(false), 1000);
  };

  return (
    <>
      <header className={showHeader ? "" : "header-hide"}>
        <nav>
          {/* LOGO */}
          <div className="logo-container">
            <h2
              className={`logo ${logoActive ? "logo-active" : ""}`}
              onClick={handleLogoClick}
            >
              <span className="logo--top">【=︿=】</span>
              <span className="logo--bottom">【=︿=】</span>
            </h2>
          </div>
          {/* === LOGO === */}

          {/* BURGER */}
          <button
            className={`burger ${menuOpen ? "burger-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-list"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* === BURGER === */}

          {/* HEADER HYPERLINKS */}
          <ul
            id="nav-list"
            className={`nav-list ${menuOpen ? "nav-open" : ""}`}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href} className="nav-list-item">
                <a
                  href={href}
                  className="nav-list-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* === HEADER HYPERLINKS === */}
        </nav>
      </header>
    </>
  );
}
