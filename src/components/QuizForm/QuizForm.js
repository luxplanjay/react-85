import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, StyledField, ErrorMsg } from './QuizForm.styled';

const quizSchema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too Short!').required('Required'),
  time: Yup.number()
    .min(5, 'At least 5 mins')
    .max(60, 'At most 60 mins')
    .positive('Must be positive!')
    .required('Required'),
  questions: Yup.number()
    .min(3, 'At least 3')
    .positive('Must be positive!')
    .required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        time: 0,
        questions: 0,
        level: 'beginner',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Topic
          <StyledField name="topic" type="text" />
          <ErrorMsg name="topic" component="div" />
        </Label>
        <Label>
          Time
          <StyledField name="time" type="number" />
          <ErrorMsg name="time" component="div" />
        </Label>
        <Label>
          Questions
          <StyledField name="questions" type="number" />
          <ErrorMsg name="questions" component="div" />
        </Label>
        <Label>
          Level
          <StyledField as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </StyledField>
          <ErrorMsg name="level" component="div" />
        </Label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
