import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DocProfile = ({ allDoctors }) => {
  const [apptShow, setApptShow] = useState(true)

  let { doctor_id } = useParams()
  const [doctors, setDoctors] = useState({})

  const doctorDetails = allDoctors.find((doctor) => {
    return doctor.id === parseInt(doctor_id)
  })

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
          <form className="apptform">
            <label>Reason For Visit</label>
            <input></input>
            <label>Preferred Date</label>
            <input></input>
            <label>Preferred Time</label>
            <input></input>
            <label>Comments</label>
            <input></input>
          </form>
          <button>Submit</button>
          <button onClick={() => setApptShow(true)}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default DocProfile
