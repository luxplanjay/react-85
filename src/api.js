import axios from 'axios';

axios.defaults.baseURL = 'https://64dcf6bce64a8525a0f76db7.mockapi.io/api';

export const fetchQuizzes = async () => {
  const resp = await axios.get('/quizzes');
  return resp.data;
};

export const deleteQuizById = async quizId => {
  const resp = await axios.delete(`/quizzes/${quizId}`);
  return resp.data;
};

export const createQuiz = async quiz => {
  const resp = await axios.post('/quizzes', quiz);
  return resp.data;
};
