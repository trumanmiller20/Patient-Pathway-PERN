import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import Register from './components/Register'
import MakeAppt from './pages/MakeAppt'
import Welcome from './pages/Welcome'
import PatientProfile from './pages/PatientProfile'
import About from './pages/About'
import Doctors from './pages/Doctors'
import DocProfile from './pages/DocProfile'
import { CheckSession } from './services/Auth'

const App = () => {
  const [patient, setPatient] = useState(null)

  const checkToken = async () => {
    const patient = await CheckSession
    setPatient(patient)
  }

  const handleLogOut = () => {
    setPatient(null)
    // toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/sign-in"
          element={<SignIn setPatient={setPatient} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/patient-profile"
          element={
            <PatientProfile
              handleLogOut={handleLogOut}
              patient={patient}
              // authenticated={authenticated}
            />
          }
        ></Route>
        <Route path="/makeappt" element={<MakeAppt />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctors/:doctor_id" element={<DocProfile />}></Route>
      </Routes>
    </div>
  )
}

export default App
