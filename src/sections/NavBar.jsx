import gbLogo from "../assets/gb-logo-text.svg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='flex w-full justify-between px-5 py-3 items-center fixed bg-white z-10'>
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