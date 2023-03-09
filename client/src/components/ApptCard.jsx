import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const ApptCard = ({ patient, allAppointments, allDoctors, allPatients }) => {
  const [patientAppts, setPatientAppts] = useState({})
  const [updated, setUpdated] = useState(false)
  const [edit, setEdit] = useState({
    visit_reason: '',
    date: '',
    time: ''
  })

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
  }

  useEffect(() => {
    if (patient) {
      getAppointmentsByPatient()
    }
  }, [patient])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    await axios.put(`${BASE_URL}/api/appointments${e.target.id}`, config, {
      visit_reason: edit.visit_reason,
      date: edit.date,
      time: edit.time
    })
    setEdit(...edit)
    setPatientAppts(...patientAppts)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value })
  }

  return (
    <div>
      {allAppointments?.map((appt, index) => (
        <div key={index}>
          <p>
            {patientAppts[index]?.doctors.firstName}{' '}
            {patientAppts[index]?.doctors.lastName}
          </p>
          <p>{patientAppts[index]?.doctors.clinicName}</p>
          <p>{patientAppts[index]?.date}</p>
          <p>{patientAppts[index]?.time}</p>
          <button
            id={patientAppts[index]?.id}
            onClick={(e) => cancelAppointment(e)}
          >
            Cancel Appointment
          </button>
          <div>
            <button onClick={update}>Update Appointment Details</button>
            {updated && (
              <form onSubmit={handleSubmit}>
                <label>Reason For Visit:</label>
                <input
                  type="visit_reason"
                  name="visit_reason"
                  value={edit.visit_reason}
                  onChange={handleChange}
            ></input>
                <label>Preferred Date:</label>
                <input
                  type="date"
                  name="date"
                  value={edit.date}
                  onChange={handleChange}
                ></input>
                <label>Preferred Time:</label>
                <input
                  type="time"
                  name="time"
                  value={edit.time}
                  onChange={handleChange}
                ></input>
                <button id={patientAppts[index]?.id}
            onClick={(e) => handleSubmit(e)} type="submit">Update</button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApptCard
