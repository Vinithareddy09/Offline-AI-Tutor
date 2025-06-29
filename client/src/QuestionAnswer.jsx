// src/QuestionAnswer.jsx
import React, { useState } from 'react';

const QuestionAnswer = ({ lessonContent }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, context: lessonContent })
      });

      const data = await res.json();
      setAnswer(data.answer || 'No answer found.');
    } catch (err) {
      setAnswer('Error fetching answer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Ask the AI Tutor a Question</h3>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={askQuestion} style={{ marginTop: '1rem' }}>
        Ask
      </button>
      {loading && <p>Loading answer...</p>}
      {answer && <p><strong>Answer:</strong> {answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
