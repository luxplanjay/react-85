import { useState } from 'react';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { createQuiz } from 'api';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {loading && <div>LOADING...</div>}
      {error && <div>ERROR!!!</div>}
    </div>
  );
}
