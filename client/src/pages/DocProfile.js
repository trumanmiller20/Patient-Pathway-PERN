import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const DocProfile = ({ allDoctors, patient }) => {
  let navigate = useNavigate()
  const initialState = { visit_reason: '', date: '', time: '' }

  const [apptShow, setApptShow] = useState(true)
  const [apptFormValues, setApptFormValues] = useState(initialState)

  let { doctor_id } = useParams()
  const [doctors, setDoctors] = useState({})

  const doctorDetails = allDoctors.find((doctor) => {
    return doctor.id === parseInt(doctor_id)
  })

  const handleChange = (e) => {
    e.preventDefault()
    setApptFormValues({ ...apptFormValues, [e.target.name]: e.target.value })
  }
  console.log(patient)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    await axios.post(
      `${BASE_URL}/api/appointments/patient/${patient.id}/doctor/${doctor_id}`,
      apptFormValues,
      config
    )

    setApptFormValues(initialState)
    navigate('/patient-profile')
  }

  useEffect(() => {
    setDoctors(doctorDetails)
  }, [allDoctors])

  return (
    <div className="doctordetailssection">
      {apptShow ? (
        <div>
          <div className="docinfo">
            <img
              className="detaildoctorpic"
              src={doctors.profile_img}
              alt="doctorpic"
            />
            <p>
              Dr. {doctors.firstName} {doctors.lastName}
            </p>
            <p>{doctors.specialty}</p>
            <p>{doctors.clinicName}</p>
            <p>{doctors.state}</p>
            <p>{doctors.network}</p>
          </div>
          <div className="apptinfo">
            <button onClick={() => setApptShow(false)}>
              Click Here To Make An Appointment
            </button>
            <Link to="/doctors">Return To Doctors List</Link>
          </div>
        </div>
      ) : (
        <div>
          <p>
            Make an Appointment with Dr. {doctors.firstName} {doctors.lastName};
          </p>
          <form className="apptform" onSubmit={handleSubmit}>
            <label>Reason For Visit</label>
            <input
              type="visit_reason"
              name="visit_reason"
              value={apptFormValues.visit_reason}
              onChange={handleChange}
            ></input>
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={apptFormValues.date}
              onChange={handleChange}
            ></input>
            <label>Preferred Time</label>
            <input
              type="time"
              name="time"
              value={apptFormValues.time}
              onChange={handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setApptShow(true)}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default DocProfile
