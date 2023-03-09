import { useState } from 'react'
import { SignInPatient } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ showing, setPatient, setShowing }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInPatient(formValues)
    setFormValues(initialState)
    setPatient(payload)
    navigate('/patient-profile')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="emailinput"
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
              className="passwordinput"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="signbuttons">
            <button
              className="signinbtn"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <p className="account">
              Don't have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(true)}>
                here
              </button>
              to make one!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
