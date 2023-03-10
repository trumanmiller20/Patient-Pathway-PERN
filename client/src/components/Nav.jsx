import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navsection">
      <NavLink to="/patient-profile" className="navlink">
        Patient Profile
      </NavLink>
      <NavLink to="/doctors" className="navlink">
        Find a Doctor
      </NavLink>
      <NavLink to="/about" className="navlink">
        About Us
      </NavLink>
      <NavLink to="/faq" className="navlink">
        FAQ
      </NavLink>
    </div>
  )
}
export default Nav
