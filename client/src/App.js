// App.js
import React, { useState } from 'react';
import './App.css';
import lessons from './assets/lessons/science.json';
import quizzes from './assets/quizzes/science.json';

function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setQuizSubmitted(false);
    setScore(0);
  };

  const handleQuizSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let newScore = 0;

    quizzes.forEach((question, index) => {
      const selected = form[`question-${index}`].value;
      if (selected === question.answer) {
        newScore++;
      }
    });

    setScore(newScore);
    setQuizSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Offline AI Tutor</h1>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <button key={lesson.id} onClick={() => handleLessonClick(lesson)}>
            {lesson.title}
          </button>
        ))}
      </div>
      {selectedLesson && (
        <div className="lesson-content">
          <h2>{selectedLesson.title}</h2>
          <p>{selectedLesson.content}</p>

          <form onSubmit={handleQuizSubmit}>
            {quizzes.map((question, i) => (
              <div key={i}>
                <p>{question.question}</p>
                {question.options.map((option, j) => (
                  <label key={j}>
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value={option}
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit">Submit Quiz</button>
          </form>

          {quizSubmitted && <p>Your score: {score}/{quizzes.length}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
