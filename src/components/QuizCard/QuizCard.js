import { HiCalendar } from 'react-icons/hi';
import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';

export const QuizCard = ({ quiz: { topic, level, time, questions } }) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
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
      <Button>
        <HiCalendar size={20} />
      </Button>
    </Wrapper>
  );
};
