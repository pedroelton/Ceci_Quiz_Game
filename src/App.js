import React, { useState } from "react";
import LandingPage from "./components/pages/LandingPage";
import Game from "../src/components/pages/Game";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true); // State to control display

  const handleStartGame = () => {
    setShowOnboarding(false); // Hide onboarding on button click
  };

  return (
    <div>
      {showOnboarding ? (
        <LandingPage onButtonClick={handleStartGame} /> // Render LandingPage
      ) : (
        <Game /> // Render Game
      )}
    </div>
  );
}
