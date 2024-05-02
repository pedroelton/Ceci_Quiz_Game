// Game.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { themes } from "../../data/themes"; // Import themes object

import "./Game.css";

function Game({ selectedTheme }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selectedTheme) {
      // Fetch questions based on selected theme
      const themeQuestions = themes[selectedTheme];
      if (themeQuestions) {
        setQuestions(themeQuestions);
      }
    }
  }, [selectedTheme]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  // const reloadButton = document.getElementById("reloadButton");

  // reloadButton.addEventListener("click", () => {
  //   window.location.reload();
  // });

  return (
    <section className="game-container">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h2>
              {score === questions.length
                ? "WOW! You did it! It's a perfect score!"
                : `You scored ${score} out of ${questions.length}`}
            </h2>
            {/* Add conditional messages based on score */}
            {/* Restart button */}
            <button
              id="reloadButton"
              className="reset-button"
              onClick={() => window.location.reload()}
            >
              Restart Game
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions.length > 0 &&
                  questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions.length > 0 &&
                questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
            </div>
          </>
        )}
      </div>
      <footer>
        <p>
          By <a href="https://ceci.jp">CECI Educational Academy</a>
        </p>
      </footer>
    </section>
  );
}

Game.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
};

export default Game;
