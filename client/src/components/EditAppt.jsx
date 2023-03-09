import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const EditAppt = ({ patient }) => {

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
    await axios.put(`${BASE_URL}/api/appointments/${id}`, config, {
      visit_reason: edit.visit_reason,
      date: edit.date,
      time: edit.time
    })
    setEdit(...edit)
  }

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
  }


  
  return (
  <div>
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
      <button
  onClick={(e) => handleSubmit(e)} type="submit">Update</button>
    </form>
  </div>
  )
}

export default EditAppt
