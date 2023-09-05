import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { createQuiz, deleteQuizById, fetchQuizzes } from 'api';

const getIntialFilters = () => {
  const savedFilters = localStorage.getItem('quiz-filters');
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    topic: '',
    level: 'all',
  };
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(getIntialFilters);

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

  // Пишем фильтры в LS
  useEffect(() => {
    localStorage.setItem('quiz-filters', JSON.stringify(filters));
  }, [filters]);

  const changeFilters = (value, key) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      topic: '',
      level: 'all',
    });
  };

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      const addedQuiz = await createQuiz(newQuiz);
      setQuizItems(prevItems => [...prevItems, addedQuiz]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
    const hasTopic = quiz.topic
      .toLowerCase()
      .includes(filters.topic.toLowerCase());

    if (filters.level === 'all') {
      return hasTopic;
    }
    return hasTopic && quiz.level === filters.level;
  });

  return (
    <Layout>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        level={filters.level}
        topic={filters.topic}
        onChange={changeFilters}
        onReset={resetFilters}
      />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
      <GlobalStyle />
      <Toaster position="top-right" />
    </Layout>
  );
};
