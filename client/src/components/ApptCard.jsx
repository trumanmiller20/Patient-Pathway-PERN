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
    <div className="apptcard">
      {patientAppts?.map((appt, index) => (
        <div className="appt" key={index}>
          <p>
            <span>Doctor:</span> {patientAppts[index]?.doctors.firstName}{' '}
            {patientAppts[index]?.doctors.lastName}
          </p>
          <p>
            <span>Clinic:</span> {patientAppts[index]?.doctors.clinicName}
          </p>
          <p>
            <span>Date:</span> {patientAppts[index]?.date}
          </p>
          <p>
            <span>Time:</span> {patientAppts[index]?.time}
          </p>
          <p>
            <span>Reason of Visit:</span> {patientAppts[index]?.visit_reason}
          </p>
          <div className="buttons">
            <button
              className="signinbtn"
              id={patientAppts[index]?.id}
              onClick={(e) => cancelAppointment(e)}
            >
              Cancel
            </button>
            <button
              className="signinbtn"
              onClick={() => navigate(`/update/${appt.id}`)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApptCard
