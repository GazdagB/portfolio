import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Button = ({children, paddingYX, bgColor, width, classes}) => {

    let buttonStyles = {
        padding: paddingYX, 
        background: bgColor,
        width: width,
        cursor: "pointer"
    }

  return (
    <div className={'text-center ' + classes} style={buttonStyles}>{children}</div>
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