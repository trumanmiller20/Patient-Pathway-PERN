import Patient from './api'

export const SignInPatient = async (data) => {
  try {
    console.log(data)
    const res = await Patient.post('/api/patients/login', data)
    console.log(res)
    localStorage.setItem('token', res.data.token)
    return res.data.patient
  } catch (error) {
    throw error
  }
}

export const RegisterPatient = async (data) => {
  try {
    const res = await Patient.post('/api/patients/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    console.log('hello')
    const res = await Patient.get('/api/patients/session')
    return res.data
  } catch (error) {
    throw error
  }
}
