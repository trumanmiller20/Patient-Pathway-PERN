import { useState } from 'react'
import { RegisterPatient } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = ({ setShowing }) => {
  let navigate = useNavigate()

  let initialState = {
    firstName: '',
    lastName: '',
    profile_img: '',
    insurance: '',
    date_of_birth: '',
    state: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterPatient({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      profile_img: formValues.profile_img,
      insurance: formValues.insurance,
      date_of_birth: formValues.date_of_birth,
      state: formValues.state,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/sign-in')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Smith"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="profile_img">Profile Image</label>
            <input
              onChange={handleChange}
              name="profile_img"
              type="text"
              placeholder="myprofilepic.jpeg"
              value={formValues.profile_img}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="insurance">Insurance</label>
            <input
              onChange={handleChange}
              name="insurance"
              type="text"
              placeholder="Blue Cross Blue Shield"
              value={formValues.insurance}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              onChange={handleChange}
              name="date_of_birth"
              type="text"
              placeholder="02/20/1994"
              value={formValues.date_of_birth}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="state">State</label>
            <input
              onChange={handleChange}
              name="state"
              type="text"
              placeholder="GA"
              value={formValues.state}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
          <button className="switchbtn" onClick={() => setShowing(false)}>
            Already have an account? Click here to Sign In!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
