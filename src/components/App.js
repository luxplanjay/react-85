import { QuizForm } from './QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import quizItems from '../quiz-items.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <QuizForm />
      <SearchBar />
      <QuizList items={quizItems} />
      <GlobalStyle />
    </Layout>
  );
};
