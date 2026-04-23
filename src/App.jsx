import "./App.css";

// MATERIAL UI COMPONENTS
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// STATES
import { useState } from "react";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      {/* HEADER */}
      <header>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </header>
      {/* === HEADER === */}
      {/* FIRST SECTION: HERO */}
      <div
        className="Hero-section"
        style={{
          backgroundColor: "green",
          height: "30rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "3.4rem",
        }}
      >
        hero
      </div>
      {/* === FIRST SECTION: HERO === */}
      {/* SECOND SECTION: ABOUT */}
      <div
        className="about-section"
        style={{
          backgroundColor: "red",
          height: "30rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        about
      </div>
      {/* === SECOND SECTION: ABOUT === */}
      {/* THIRD SECTION: EXPERIENCE */}
      <div
        className="experience-section"
        style={{
          backgroundColor: "purple",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        experience
      </div>
      {/* === THIRD SECTION: EXPERIENCE */}
      {/* FOURTH SECTION: PROJECTS */}
      <div
        className="project-section"
        style={{
          backgroundColor: "yellow",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        projects
      </div>
      {/* === FOURTH SECTION: PROJECTS === */}
      {/* FIFTH SECTION: CONTACTS */}
      <div
        className="contact-section"
        style={{
          backgroundColor: "darkcyan",
          height: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        contact
      </div>
      {/* === FIFTH SECTION: CONTACTS */}
      {/* FOOTER */}
      <footer
        style={{
          height: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        footer
      </footer>
      {/* === FOOTER === */}
    </div>
  );
}

export default App;
