import PropTypes from 'prop-types';
import { useState } from 'react';
import './Button.css';
import {motion} from "framer-motion"

const Button = ({ children, paddingYX, bgColor, height, width, classes, onClick = ()=>{}, isAnimated, whileHover, animate}) => {
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
    height: height,
    cursor: 'pointer',
  };
  // Conditionally add "animated-btn" class if isAnimated and clicked is true
  const buttonClassNames = `text-center ${classes} ${isAnimated && clicked ? 'animated-btn' : ''}`;

  return (
    <div className={`w-[${width}] h-[${height}]`}>
      <motion.div
        animate={animate}
        onClick={handleClick}
        className={buttonClassNames}
        style={buttonStyles}
        whileHover={whileHover}
      >
        {(!isAnimated || !clicked) && children} {/* Only show children if not animated or not clicked */}
      </motion.div>
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
  whileHover: PropTypes.object,
  isAnimated: PropTypes.bool, // Add the isAnimated prop to control the animation
};

export default Button;
