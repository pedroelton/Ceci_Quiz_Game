import React, { useState } from "react";
import LandingPage from "./components/pages/LandingPage";
import Game from "../src/components/pages/Game";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [theme, setTheme] = useState(null);

  const handleStartGame = (selectedTheme) => {
    setShowOnboarding(false);
    setTheme(selectedTheme);
  };

  return (
    <div>
      {showOnboarding ? (
        <LandingPage onButtonClick={handleStartGame} />
      ) : (
        <Game theme={theme} />
      )}
    </div>
  );
}
