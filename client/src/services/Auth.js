import Patient from './api'

export const SignInPatient = async (data) => {
  try {
    const res = await Patient.post('/auth/login', data)
    // Set the current signed in users token to localStorage
    return res.data.patient
  } catch (error) {
    throw error
  }
}

export const RegisterPatient = async (data) => {
  try {
    const res = await Patient.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Patient.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
