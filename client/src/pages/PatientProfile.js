import PatientInfo from '../components/PatientInfo'
import ApptCard from '../components/ApptCard'
import { Link } from 'react-router-dom'

const PatientProfile = () => {
  return (
    <div className="patientprofile">
      <div className="welcomesection">
        <h2>Welcome Back!</h2>
        <PatientInfo />
      </div>
      <div className="upcominginfo">
        <ApptCard />
        <Link to="/makeappt">New Appointment</Link>
        <br></br>
        <Link to="/">Sign Out</Link>
      </div>
    </div>
  )
}
export default PatientProfile
