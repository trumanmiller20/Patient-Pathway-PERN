import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const DocProfile = () => {
  return (
    <div className="doctordetailssection">
      <div className="docinfo">
        <img
          className="detaildoctorpic"
          src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <p>Dr. Desmond Blake</p>
        <p>General Practice, Orthopedics</p>
        <p>Midtown Medical Center</p>
        <p>Atlanta, GA</p>
        <p>Blue Cross Blue Shield</p>
      </div>
      <div className="apptinfo">
        <Link to="/makeappt">Appointment Request goes here</Link>
        <Link to="/doctors">Return To Doctors List</Link>
      </div>
    </div>
  )
}

export default DocProfile
