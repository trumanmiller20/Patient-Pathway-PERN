import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import Register from './components/Register'
import PatientProfile from './components/PatientProfile'
import About from './components/About'
import MakeAppt from './components/MakeAppt'

const App = () => {
  const [patient, setPatient] = useState(null)

  const handleLogOut = () => {
    setPatient(null)
    // toggleAuthenticated(false)
    localStorage.clear()
  }

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
          path="/"
          element={
            <PatientProfile
              handleLogOut={handleLogOut}
              patient={patient}
              // authenticated={authenticated}
            />
          }
        ></Route>
        <Route path="/makeappt" element={<MakeAppt />}></Route>
      </Routes>
    </div>
  )
}

export default App
