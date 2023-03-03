import './App.css'
import { Routes, Route } from 'react-router-dom'
import PatientInfo from './components/PatientInfo'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import Register from './components/Register'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patient-info" element={<PatientInfo />}></Route>
      </Routes>
    </div>
  )
}

export default App
