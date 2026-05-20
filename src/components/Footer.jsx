import "../App.css";
import "./Footer.css";

// MATERIAL UI ICONS
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  // SECTIONS LINKS
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {/* FIRST SECTION {LEFT} */}
          <div className="footer-brand">
            <h2 className="footer-name neon-blue-text">Amany Elsayed</h2>
            <p className="footer-desc">
              Developer & Electronics Engineer building full-stack experiences
              that bridge physical logic and digital craft.
            </p>
            <div className="footer-socials">
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/Amany-Elsayed", "_blank")
                }
              />
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amany-elsayed0/",
                    "_blank",
                  )
                }
              />
              <EmailIcon
                onClick={() =>
                  navigator.clipboard.writeText("amanyelsayed@outlook.com")
                }
              />
            </div>
          </div>
          {/* === FIRST SECTION {LEFT} === */}

          {/* SECOND SECTION {CENTER} */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}-section`}
                className="footer-link"
              >
                {link}
              </a>
            ))}
          </div>
          {/* === SECOND SECTION {CENTER} === */}

          {/* THIRD SECTION {RIGHT} */}
          <div className="footer-contact">
            <h3 className="footer-heading">Get In Touch</h3>
            <p>amanyelsayed0@outlook.com</p>
            <p>(+20) 100-963-6921</p>
            <p>Al Gharbia, Egypt</p>
          </div>
        </div>
        {/* THIRD SECTION {RIGHT} */}

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <p>
            Made with <FavoriteIcon className="footer-heart" /> by Amany
          </p>
          <p>© 2026 All rights reserved.</p>
        </div>
        {/* === BOTTOM SECTION === */}
      </footer>
    </>
  );
}
