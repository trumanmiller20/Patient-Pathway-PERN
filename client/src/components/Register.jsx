import { useState } from 'react'
import { RegisterPatient } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = ({ showing, setShowing }) => {
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
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Smith"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="profile_img">
              Profile Image
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="profile_img"
              type="text"
              placeholder="myprofilepic.jpeg"
              value={formValues.profile_img}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="insurance">
              Insurance
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="insurance"
              type="text"
              placeholder="Blue Cross Blue Shield"
              value={formValues.insurance}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="date_of_birth">
              Date of Birth
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="date_of_birth"
              type="text"
              placeholder="02/20/1994"
              value={formValues.date_of_birth}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="state">
              State
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="state"
              type="text"
              placeholder="GA"
              value={formValues.state}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="reg"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="reg"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="reg"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="signbuttons">
            <button
              className="signinbtn"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign In
            </button>
            <p className="account">
              Already have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(false)}>
                here
              </button>{' '}
              to Sign In!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
