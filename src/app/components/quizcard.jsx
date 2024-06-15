// components/Quiz.js
import { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'] },
    { id: 2, text: 'Question 2', options: ['Option A', 'Option B', 'Option C'] },
    // Add more questions as needed
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      {currentQuestion < questions.length - 1 && (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
