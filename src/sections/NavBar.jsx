import gbLogo from "../assets/gb-logo-text.svg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='flex w-screen justify-between p-5 items-center fixed bg-white'>
      <img src={gbLogo} alt="" style={{height: "50px"}}/>
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default NavBar