import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, paddingYX, bgColor, width, classes}) => {

    let buttonStyles = {
        padding: paddingYX, 
        background: bgColor,
        width: width,
        cursor: "pointer"
    }

  return (
    <div className={'text-center ' + classes} style={buttonStyles}>{text}</div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  paddingYX: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.string

}

export default Button