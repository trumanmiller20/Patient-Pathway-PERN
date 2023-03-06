import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import Register from './components/Register'
import PatientProfile from './components/PatientProfile'
import About from './components/About'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patient-profile" element={<PatientProfile />}></Route>
      </Routes>
    </div>
  )
}

export default App
