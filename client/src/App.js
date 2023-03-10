import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import Register from './components/Register'
import Welcome from './pages/Welcome'
import PatientProfile from './pages/PatientProfile'
import About from './pages/About'
import Doctors from './pages/Doctors'
import DocProfile from './pages/DocProfile'
import EditAppt from './components/EditAppt'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import Patient from './services/api'
import { BASE_URL } from './services/api'
import { useNavigate } from 'react-router-dom'
import FAQ from './pages/FAQ'

const App = () => {
  let navigate = useNavigate()

  const [patient, setPatient] = useState(null)

  const [allPatients, setAllPatients] = useState(null)

  const [allAppointments, setAllAppointments] = useState(null)

  const [allDoctors, setAllDoctors] = useState([])

  const [showing, setShowing] = useState(false)

  const GetPatients = async () => {
    const res = await axios.get(`${BASE_URL}/api/patients`)
    setAllPatients(res.data)
  }

  const GetDoctors = async () => {
    const res = await axios.get(`${BASE_URL}/api/doctors`)
    setAllDoctors(res.data)
  }

  const GetAppointments = async () => {
    const res = await axios.get(`${BASE_URL}/api/appointments`)
    setAllAppointments(res.data)
  }

  const checkToken = async () => {
    const patient = await CheckSession()
    setPatient(patient)
  }

  const handleLogOut = () => {
    setPatient(null)
    // toggleAuthenticated(false)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    GetDoctors()
    GetPatients()
    GetAppointments()
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              showing={showing}
              setShowing={setShowing}
              setPatient={setPatient}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route
          path="/sign-in"
          element={<SignIn setPatient={setPatient} setShowing={setShowing} />}
        ></Route>
        <Route
          path="/register"
          element={<Register setShowing={setShowing} />}
        ></Route>
        <Route
          path="/patient-profile"
          element={
            <PatientProfile
              handleLogOut={handleLogOut}
              patient={patient}
              allPatients={allPatients}
              allDoctors={allDoctors}
              allAppointments={allAppointments}
              // authenticated={authenticated}
            />
          }
        ></Route>
        <Route
          path="/doctors"
          element={<Doctors patient={patient} allDoctors={allDoctors} />}
        ></Route>
        <Route
          path="/doctors/:doctor_id"
          element={
            <DocProfile
              allPatients={allPatients}
              patient={patient}
              allDoctors={allDoctors}
            />
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <EditAppt
              allPatients={allPatients}
              patient={patient}
              allDoctors={allDoctors}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
