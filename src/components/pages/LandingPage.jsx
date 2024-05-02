// LandingPage.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LandingPage.css";
import Logo from "../Logo";
import schoolWallpaper from "../../img/img-ui/schoolWallpaper.webp";

export default function LandingPage({ onButtonClick }) {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const isButtonDisabled = !selectedTheme; // Disable button if no theme is chosen

  const handleClick = () => {
    if (selectedTheme) {
      onButtonClick(selectedTheme);
    }
  };

  return (
    <section className="landingPage-container">
      {/* Start Navbar */}
      {/* <nav className="landingPage-navbar">
      </nav> */}
      {/* End Navbar */}

      {/* Start Landing Page Content */}
      <div className="landingPage-content">
        <div className="landingPage-content_left">
          <div className="landingPage-navbar">
            <Logo size="120px" />
          </div>
          <div className="landingPage-content_text">
            <h1>Welcome to CECI Quiz App!</h1>
            <p>Test your knowledge and have fun!</p>
          </div>
          <select
            value={selectedTheme}
            onChange={handleThemeChange}
            className="landingPage-content_selection"
          >
            <option value="">--Select a Topic to Start--</option>
            <option value="literature">Literature</option>
            {/* <option value="marineLife">Marine Life</option> */}
            {/* <option value="art">Art (in progress)</option> */}
            {/* Add more theme options here */}
          </select>
          <button
            disabled={isButtonDisabled}
            onClick={handleClick}
            className={`start-quiz-button ${
              isButtonDisabled ? "landingPage-content_left disabled-style" : ""
            }`}
          >
            Start Quiz
          </button>
        </div>
        <div className="landingPage-content_right">
          <img src={schoolWallpaper} alt="CECI School logo" />
        </div>
      </div>
      {/* End Landing page Content */}
      <footer>
        <p>
          By <a href="https://ceci.jp">CECI Educational Academy</a>
        </p>
      </footer>
    </section>
  );
}

LandingPage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
