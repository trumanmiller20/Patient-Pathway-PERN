import './App.css'
import { Routes, Route } from 'react-router-dom'
import PatientInfo from './components/PatientInfo'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import Register from './components/Register'
import PatientProfile from './components/PatientProfile'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patient-profile" element={<PatientProfile />}></Route>
      </Routes>
    </div>
  )
}

export default App
