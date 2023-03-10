import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const EditAppt = ({ patient }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [edit, setEdit] = useState({
    visit_reason: '',
    date: '',
    time: ''
  })

  console.log(id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    await axios.put(
      `${BASE_URL}/api/appointments/${id}`,
      {
        visit_reason: edit.visit_reason,
        date: edit.date,
        time: edit.time
      },
      config
    )
    navigate('/patient-profile')
  }

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
  }

  return (
    <div className="alledit">
      <form className="coledit" onSubmit={handleSubmit}>
        <div className="editinput">
          <label className="labele">Reason For Visit:</label>
          <input
            className="edit"
            type="visit_reason"
            name="visit_reason"
            value={edit.visit_reason}
            onChange={handleChange}
          ></input>
        </div>
        <div className="editinput">
          <label className="labele">Updated Date:</label>
          <input
            className="edit"
            type="date"
            name="date"
            value={edit.date}
            onChange={handleChange}
          ></input>
        </div>
        <div className="editinput">
          <label className="labele">Updated Time:</label>
          <input
            className="edit"
            type="time"
            name="time"
            value={edit.time}
            onChange={handleChange}
          ></input>
        </div>
        <button
          className="updatebtn"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Update Appointment
        </button>
      </form>
    </div>
  )
}

export default EditAppt
