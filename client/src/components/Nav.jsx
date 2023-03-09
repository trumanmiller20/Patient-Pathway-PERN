import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navsection">
      <NavLink to="/patient-profile" className="navprofile">
        Patient Profile
      </NavLink>
      <NavLink to="/doctors" className="navdoctor">
        Find a Doctor
      </NavLink>
      <NavLink to="/about" className="navabout">
        About Us
      </NavLink>
    </div>
  )
}
export default Nav
