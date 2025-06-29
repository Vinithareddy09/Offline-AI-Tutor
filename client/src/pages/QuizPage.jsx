import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const { topic } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(`/api/quizzes/${topic}`);
      const data = await res.json();
      setQuiz(data);
    };
    fetchQuiz();
  }, [topic]);

  const handleOptionChange = (index, option) => {
    setSelectedOptions({ ...selectedOptions, [index]: option });
  };

  const handleSubmit = () => {
    let points = 0;
    quiz.questions.forEach((q, i) => {
      if (selectedOptions[i] === q.answer) points++;
    });
    setScore(points);
  };

  if (!quiz) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j}>
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                checked={selectedOptions[i] === opt}
                onChange={() => handleOptionChange(i, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && (
        <h2>Score: {score}/{quiz.questions.length}</h2>
      )}
    </div>
  );
};

export default QuizPage;
