
import React, { useState } from 'react';

function App() {
  const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
      difficulty: 2, // Difficulty level (e.g., 1-3 stars)
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoiceClick = (choice) => {
    if (choice === questions[currentQuestion].correctAnswer) {
      setShowResult('Correct');
    } else {
      setShowResult('Sorry. Please try again.');
    }
    setSelectedChoice(choice);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedChoice(null);
      setShowResult(false);
    }
  };

  return (
    <div className="App">
      <h1>MCQ Quiz</h1>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        <div className="choices">
          {questions[currentQuestion].choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice)}
              className={
                selectedChoice === choice
                  ? 'selected'
                  : selectedChoice
                  ? 'disabled'
                  : ''
              }
            >
              {choice}
            </button>
          ))}
        </div>
        {showResult && <p>{showResult}</p>}
        {selectedChoice && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
      </div>
      <div className="top-bar">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
}

export default App;


