import { useState } from 'react'
import { SignInPatient } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser, setShowing }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInPatient(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/patient-profile')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
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
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
          <button className="switchbtn" onClick={() => setShowing(true)}>
            Don't have an account? Click here to make one!
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
