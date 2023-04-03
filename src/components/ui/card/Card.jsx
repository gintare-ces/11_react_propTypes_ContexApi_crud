import PropTypes from 'prop-types';
import './card.css';

function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
}
export default Card;
