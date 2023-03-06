import PatientInfo from '../components/PatientInfo'
import ApptCard from '../components/ApptCard'
import { Link } from 'react-router-dom'

const PatientProfile = () => {
  return (
    <div className="patientprofile">
      <h2>Welcome Back!</h2>
      <PatientInfo />
      <ApptCard />
      <Link to="/makeappt">New Appointment</Link>
      <Link to="/">Sign Out</Link>
    </div>
  )
}
export default PatientProfile
