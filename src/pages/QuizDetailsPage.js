import { fetchQuizById } from 'api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
  const location = useLocation();

  const params = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const fetchedQuiz = await fetchQuizById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuiz();
  }, [params.quizId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/quizzes'}>Back to quizzes</Link>
      {quiz && <div>{quiz.topic}</div>}
    </div>
  );
}
