import PropTypes from 'prop-types';
import { useState } from 'react';
import './Button.css';

const Button = ({ children, paddingYX, bgColor, width, classes, onClick, isAnimated }) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      onClick();
      if (isAnimated) {
        animateButton(); // Trigger animation only if isAnimated is true
      }
    }
  }

  function animateButton() {
    setClicked(true); // Set clicked to true
    
    setTimeout(() => {
      setClicked(false); // Reset clicked state after 1 second
    }, 1000);
  }

  // Button styles
  const buttonStyles = {
    padding: paddingYX,
    background: bgColor,
    width: width,
    cursor: 'pointer',
  };

  // Conditionally add "animated-btn" class if isAnimated and clicked is true
  const buttonClassNames = `text-center ${classes} ${isAnimated && clicked ? 'animated-btn' : ''}`;

  return (
    <div
      onClick={handleClick}
      className={buttonClassNames}
      style={buttonStyles}
    >
      {(!isAnimated || !clicked) && children} {/* Only show children if not animated or not clicked */}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  paddingYX: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isAnimated: PropTypes.bool, // Add the isAnimated prop to control the animation
};

export default Button;
