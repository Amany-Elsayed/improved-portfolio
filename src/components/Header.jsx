import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        {/* HEADER HYPERLINKS */}
        <nav>
          <div className="logo-container">
            <h2 className="logo">
              <span className="logo--top">【=︿=】</span>
              <span className="logo--bottom">【=︿=】</span>
            </h2>
          </div>
          <ul className="nav-list">
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
              <a href="#project-section" className="nav-list-link">
                Projects
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#contact-section" className="nav-list-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* === HEADER HYPERLINKS === */}
      </header>
      {/* === HEADER === */}
    </>
  );
}
