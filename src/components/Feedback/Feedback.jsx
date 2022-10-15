import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const onButtonClick = event => {
    onLeaveFeedback(event.target.dataset.name);
  };
  return (
    <div>
      {options.map(item => (
        <Button data-name={item} onClick={onButtonClick} key={item}>
          {item}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
}