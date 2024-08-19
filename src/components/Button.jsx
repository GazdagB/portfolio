import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
const Button = ({children, paddingYX, bgColor, width, classes, onClick}) => {

  const [clicked, setClicked] = useState(false)

    let buttonStyles = {
        padding: paddingYX, 
        background: bgColor,
        width: width,
        cursor: "pointer"
    }


  return (
    <animated.div onClick={()=>{
      onClick();
      prev => setClicked(!prev)
    }} className={'text-center ' + classes} style={buttonStyles}>{children}</animated.div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  paddingYX: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  classes: PropTypes.string

}

export default Button