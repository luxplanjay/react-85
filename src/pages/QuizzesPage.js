import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar';
import { deleteQuizById, fetchQuizzes } from 'api';
import { useQueryParams } from 'hooks/useQueryParams';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { topic, level } = useQueryParams();

  // HTTP запрос за всеми квизами
  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getQuizzes();
  }, []);

  const deleteQuiz = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(quiz => quiz.id !== deletedQuiz.id)
      );
      toast.success('ВСЕ ОЧЕНЬ ХОРОШО!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const visibleItems = quizItems.filter(quiz => {
    const hasTopic = quiz.topic.toLowerCase().includes(topic.toLowerCase());

    if (level === 'all') {
      return hasTopic;
    }
    return hasTopic && quiz.level === level;
  });

  return (
    <div>
      <SearchBar />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
