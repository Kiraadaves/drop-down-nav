import PropTypes from 'prop-types'

const Button = ({text, className, onMouseEnter, onMouseLeave}) => {
    return (
      <div>
        <button className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{text}</button>
      </div>
    );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}

export default Button;