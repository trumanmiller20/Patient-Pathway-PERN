import PatientInfo from './PatientInfo'
import ApptCard from './ApptCard'
import SignOut from './SignOut'

const PatientProfile = () => {
  return (
    <div className="patientprofile">
      <h2>Welcome Back!</h2>
      <PatientInfo />
      <ApptCard />
      <SignOut />
    </div>
  )
}
export default PatientProfile
