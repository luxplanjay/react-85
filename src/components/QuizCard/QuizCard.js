import { Link } from 'react-router-dom';
import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper level={level}>
      <Link to={`/quizzes/${id}`}>
        <Topic>{topic}</Topic>
      </Link>
      <MetaWrapper>
        <Text>
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Wrapper>
  );
};
