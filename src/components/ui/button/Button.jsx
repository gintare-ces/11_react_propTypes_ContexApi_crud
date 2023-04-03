import css from './Button.module.css';
import PropTypes from 'prop-types';
import React from 'react'

function Button({ className, onClick, children }) {
  return (
    <button onClick={onClick} className={[css.btn, className].join(' ')}>{children}</button>
  )
}
// validuoti propsus - propTypes
Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
export default Button