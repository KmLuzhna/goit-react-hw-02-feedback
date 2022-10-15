import { Wrapper } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
