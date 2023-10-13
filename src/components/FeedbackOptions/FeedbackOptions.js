import { Button, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Container>
      <Button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </Button>
    </Container>
  );
};
