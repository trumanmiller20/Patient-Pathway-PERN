// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../services/api'
import DocCard from '../components/DocCard'

const Doctors = ({ allDoctors }) => {
  return (
    <div className="doctors">
      <div className="search">Search Functionality goes here</div>
      <div className="doctorlist">
        {allDoctors?.map((doctor) => (
          <DocCard
            key={doctor.id}
            id={doctor.id}
            profile_img={doctor.profile_img}
            firstName={doctor.firstName}
            lastName={doctor.lastName}
            specialty={doctor.specialty}
            clinicName={doctor.clinicName}
            network={doctor.network}
            state={doctor.state}
          />
        ))}
      </div>
    </div>
  )
}

export default Doctors
