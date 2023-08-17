import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.green;
    case 'intermediate':
      return props.theme.colors.orange;
    case 'advanced':
      return props.theme.colors.red;
    default:
      return null;
  }
};

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid ${getBorderColor};
  border-radius: ${props => props.theme.radii.sm};
`;

export const Topic = styled.h2`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(2)};
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(1)};
  margin: 0;
  border: none;
  color: red;

  :hover {
    color: green;
    background-color: blue;
  }

  svg {
    display: block;
  }
`;
