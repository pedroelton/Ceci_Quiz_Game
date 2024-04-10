import React, { useState } from "react";
import LandingPage from "./components/pages/LandingPage";
import Game from "./components/pages/Game";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleButtonClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on whether a theme is selected */}
      {selectedTheme ? (
        <Game selectedTheme={selectedTheme} />
      ) : (
        <LandingPage onButtonClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;
