import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const ApptCard = ({ patient, allAppointments }) => {
  const [patientAppts, setPatientAppts] = useState({})

  const getAppointmentsByPatient = async () => {
    const res = await axios.get(`${BASE_URL}/api/appointments/${patient.id}/appointments`)
    // setPatientAppts(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getAppointmentsByPatient()
  },[])

  return (
    <div>
      <div className="infocontainer">
        <h3>Why you no work?</h3>
        <p>With: Dr. Blake</p>
        <p>On: 12:00pm, February 23rd 2023</p>
        <p>At: Midtown Medical Center</p>
      </div>
    </div>
  )
}
export default ApptCard
