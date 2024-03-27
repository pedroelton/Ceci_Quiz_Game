import React from "react";
import "./LandingPage.css";
import Logo from "../Logo";

export default function LandingPage({ onButtonClick }) {
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
          <button onClick={onButtonClick}>Start Quiz</button>
        </div>
        <div className="landingPage-content_right">
          {/* <img src={schoolWallpaper} alt="CECI School logo" /> */}
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
