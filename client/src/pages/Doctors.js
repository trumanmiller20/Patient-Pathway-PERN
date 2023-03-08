import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import DocCard from '../components/DocCard'

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState({})

  const GetDoctors = async () => {
    const res = await axios.get(`${BASE_URL}/api/doctors`)
    console.log(res.data)
    setAllDoctors(res.data)
  }

  useEffect(() => {
    GetDoctors()
  }, [])
  console.log(allDoctors)

  return (
    <div className="doctors">
      <div className="search">Search Functionality goes here</div>
      <div className="doctorlist">
        <Link to="/doctors/:doctor_id">
          <DocCard />
        </Link>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </div>
    </div>
  )
}

export default Doctors
