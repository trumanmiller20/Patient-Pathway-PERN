import SignIn from '../components/SignIn'
import Register from '../components/Register'

const Welcome = ({ showing, setShowing, setPatient }) => {
  return (
    <div>
      <div className="welcomeroot">
        <h1 className="welcome">Welcome!</h1>
        <h3 className="description">
          <i>The doctor will be with you shortly!</i>
        </h3>
      </div>
      <div className="signingform">
        {showing ? (
          <Register showing={showing} setShowing={setShowing} />
        ) : (
          <SignIn
            showing={showing}
            setShowing={setShowing}
            setPatient={setPatient}
          />
        )}
      </div>
    </div>
  )
}
export default Welcome
