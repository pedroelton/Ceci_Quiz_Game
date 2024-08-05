import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./LandingPage.css";
import "./popup.css";
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

  useEffect(() => {
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popupContainer = document.getElementById("popupContainer");

    if (openPopup && closePopup && popupContainer) {
      openPopup.addEventListener("click", () => {
        popupContainer.style.display = "flex";
      });

      closePopup.addEventListener("click", () => {
        popupContainer.style.display = "none";
      });

      popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
          popupContainer.style.display = "none";
        }
      });

      // Cleanup event listeners on component unmount
      return () => {
        openPopup.removeEventListener("click", () => {
          popupContainer.style.display = "flex";
        });

        closePopup.removeEventListener("click", () => {
          popupContainer.style.display = "none";
        });

        popupContainer.removeEventListener("click", (event) => {
          if (event.target === popupContainer) {
            popupContainer.style.display = "none";
          }
        });
      };
    }
  }, []);

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
            <option value="marineLife">Marine Life</option>
            <option value="forestAnimals">Forest Animals</option>
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
        <button id="openPopup">Instructions</button>
        <div id="popupContainer" className="popup-container">
          <div className="popup">
            <span id="closePopup" className="close-popup">
              &times;
            </span>
            <h2 className="popup-title">CECI Quiz Game</h2>
            <p className="popup-text">
              After selecting a topic, a 24-question quiz with multiple answers
              will appear. This quiz game doesn’t have images, it’s ideal when
              the kids can read. The number of right answers will be displayed
              on the end screen. The kids can answer in groups and vote for the
              right answer.
            </p>
            <b>To close this popup, tap outside.</b>
          </div>
        </div>
      </footer>
    </section>
  );
}

LandingPage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
