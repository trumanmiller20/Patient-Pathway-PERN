import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
// import DocCard from '../components/DocCard'

const DocProfile = ({ allDoctors }) => {
  console.log(allDoctors)
  let { doctor_id } = useParams()
  const [doctors, setDoctors] = useState({})

  const doctorDetails = allDoctors.find((doctor) => {
    return doctor.id === parseInt(doctor_id)
  })
  console.log(doctorDetails)

  // const GetDoctorDetails = async () => {
  //   const res = await axios.get(`${BASE_URL}/api/doctors/${id}`)
  //   console.log(res)
  //   setDoctor(res.data)
  // }

  useEffect(() => {
    setDoctors(doctorDetails)
  }, [allDoctors])

  return (
    <div className="doctordetailssection">
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
      {/* <div className="apptinfo">
        <Link to="/makeappt">Appointment Request goes here</Link>
        <Link to="/doctors">Return To Doctors List</Link>
      </div> */}
    </div>
  )
}

export default DocProfile
