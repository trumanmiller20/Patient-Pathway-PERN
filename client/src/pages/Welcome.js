import SignIn from '../components/SignIn'
import Register from '../components/Register'

const Welcome = ({ showing }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>The doctor will be with you shortly!</h3>
      {showing ? <Register /> : <SignIn />}
    </div>
  )
}
export default Welcome
