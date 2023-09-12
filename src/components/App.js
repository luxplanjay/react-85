import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={<CreateQuizPage />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:quizId" element={<QuizDetailsPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" />
    </>
  );
};
