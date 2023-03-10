import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import EditAppt from './EditAppt'

const ApptCard = ({ patient, allAppointments, allDoctors, allPatients }) => {
  let navigate = useNavigate()
  const [patientAppts, setPatientAppts] = useState([])


  const getAppointmentsByPatient = async () => {
    const res = await axios.get(
      `${BASE_URL}/api/appointments/${patient.id}/appointments`
    )
    console.log(res.data)
    setPatientAppts(res.data)
  }

  const cancelAppointment = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    await axios.delete(`${BASE_URL}/api/appointments/${e.target.id}`, config)
    getAppointmentsByPatient()
  }

  useEffect(() => {
    if (patient) {
      getAppointmentsByPatient()
    }
  }, [patient])

return (
    <div>
      {patientAppts?.map((appt, index) => (
        <div key={index}>
          <p>Doctor: {patientAppts[index]?.doctors.firstName}{' '}
            {patientAppts[index]?.doctors.lastName}
          </p>
          <p>Hospital: {patientAppts[index]?.doctors.clinicName}</p>
          <p>Date: {patientAppts[index]?.date}</p>
          <p>Time: {patientAppts[index]?.time}</p>
          <p>Reason: {patientAppts[index]?.visit_reason}</p>
          <button
            id={patientAppts[index]?.id}
            onClick={(e) => cancelAppointment(e)}
          >
            Cancel Appointment
          </button>
            <button onClick={() => navigate(`/update/${appt.id}`)}>Update Appointment Details</button>
        </div>
      ))}
    </div>
  )
}

export default ApptCard
