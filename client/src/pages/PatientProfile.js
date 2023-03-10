import PatientInfo from '../components/PatientInfo'
import ApptCard from '../components/ApptCard'
//import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const PatientProfile = ({
  allPatients,
  allDoctors,
  allAppointments,
  patient,
  handleLogOut
}) => {
  const [thisPatient, setThisPatient] = useState({})

  const GetPatientDetails = async () => {
    const res = await axios.get(
      `${BASE_URL}/api/patients/details/${patient.id}`
    )
    setThisPatient(res.data)
  }

  useEffect(() => {
    if (patient) {
      GetPatientDetails()
    }
  }, [patient])

  return (
    <div className="patientprofile">
      <div className="welcomesection">
        <h2 className="welcomep">Welcome Back {thisPatient?.firstName}!</h2>
        <PatientInfo thisPatient={thisPatient} />
        <button className="signinbtn" onClick={handleLogOut}>
          Sign Out
        </button>
      </div>
      <div className="upcominginfo">
        <h3 className="apptheader">Your Upcoming Appointments</h3>
        <ApptCard
          patient={patient}
          allAppointments={allAppointments}
          allDoctors={allDoctors}
          allPatients={allPatients}
        />
        <br></br>
      </div>
    </div>
  )
}
export default PatientProfile
