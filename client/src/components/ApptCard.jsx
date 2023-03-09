import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const ApptCard = ({ patient, allAppointments, allDoctors, allPatients }) => {
  const [patientAppts, setPatientAppts] = useState({})

  const getAppointmentsByPatient = async () => {
    const res = await axios.get(`${BASE_URL}/api/appointments/${patient.id}/appointments`)
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
    getAppointmentsByPatient()
  },[])

  // constFindDoctor = () => {
  //   const doctorDetails = allDoctors.find((doctor) => {
  //     return doctor.id === parseInt(doctor.id)
  //   })

  // const patientDetails = allPatients.find((doctor) => {
    //   return patient.id === parseInt(patient.id)
    // })
    

    return (
      <div>
         {allAppointments.map((appt, index) => (
          <div>
            <p>{patientAppts[index].doctors.firstName} {patientAppts[index].doctors.lastName}</p>
            <p>{patientAppts[index].doctors.clinicName}</p>
            <p>{patientAppts[index].date}</p>
            <p>{patientAppts[index].time}</p>
            <button id={patientAppts[index].id} onClick={(e) => cancelAppointment(e)}>Cancel Appointment</button>
            <button>Edit Appointment Details</button>
           </div>
        ))} 
    </div>
  )
}

export default ApptCard
