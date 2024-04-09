import React, { useState } from "react";
import { literature } from "../../data/topics/literature";
import "./Game.css";

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < literature.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <section className="game-container">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h2>{/* You scored {score} out of {literature.length} */}</h2>
            {/* Conditional message based on score */}
            {score === literature.length && <h2>WOW! IT'S A PERFECT SCORE</h2>}
            {score >= (2 * literature.length) / 3 &&
              score < literature.length && (
                <h2>
                  Cool, you made {score} out of {literature.length} right!
                </h2>
              )}
            {score < literature.length / 2 && (
              <h2>
                You just made {score} out of {literature.length}, do you want to
                try again!?
              </h2>
            )}
            <button onClick={() => window.location.reload()}>
              Restart Game
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{literature.length}
              </div>
              <div className="question-text">
                {literature[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {literature[currentQuestion].answerOptions.map(
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

export default Game;
