import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navsection">
      <NavLink to="/patient-profile">Your Info</NavLink>
      <NavLink to="/doctors">Search Doctors</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
  )
}
export default Nav
