import PropTypes from 'prop-types';
import css from './Card.module.css';

function Card({ children, className }) {
  return <div className={`${css.card} ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
}
export default Card;
