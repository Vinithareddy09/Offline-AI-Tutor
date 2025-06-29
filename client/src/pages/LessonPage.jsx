import React, { useEffect, useState } from 'react';

const AskDoubt = ({ fullLessonText }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const ask = () => {
    fetch('http://localhost:5000/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, context: fullLessonText })
    })
      .then(res => res.json())
      .then(data => setAnswer(data.answer));
  };

  return (
    <div>
      <h3>Ask a Doubt</h3>
      <input value={question} onChange={e => setQuestion(e.target.value)} />
      <button onClick={ask}>Ask</button>
      {answer && <p><strong>Answer:</strong> {answer}</p>}
    </div>
  );
};

const LessonPage = ({ subject }) => {
  const [lessonData, setLessonData] = useState([]);
  const [readAloud, setReadAloud] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/lessons/${subject}`)
      .then(res => res.json())
      .then(data => setLessonData(data));
  }, [subject]);

  useEffect(() => {
    if (readAloud && lessonData.length > 0) {
      const fullText = lessonData.map(l => l.content).join(" ");
      speak(fullText);
    }
  }, [readAloud, lessonData]); // This is the important useEffect

  const speak = (text) => {
    if (!window.speechSynthesis) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>{subject}</h2>
      <label>
        <input
          type="checkbox"
          checked={readAloud}
          onChange={() => setReadAloud(!readAloud)}
        />
        Enable Text-to-Speech
      </label>
      <div>
        {lessonData.map((lesson, idx) => (
          <div key={idx} style={{ marginBottom: '15px' }}>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
          </div>
        ))}
      </div>
      <AskDoubt fullLessonText={lessonData.map(l => l.content).join(" ")} />
    </div>
  );
};

export default LessonPage;