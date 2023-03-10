import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import DocCard from '../components/DocCard'
import Search from '../components/Search'
import Patient from '../services/api'

const Doctors = ({ allDoctors }) => {
  console.log(allDoctors)

  const [doctors, setDoctors] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getDoctors = async () => {
    const response = await axios.get(`${BASE_URL}/api/doctors`)
    setDoctors(response.data.doctors)
  }
  useEffect(() => {
    getDoctors()
  }, [searched])

  const getSearchResults = async (event) => {
    event.preventDefault()

    const response = await Patient.get(
      `${BASE_URL}/api/doctors/find-doctor?search=${searchQuery}`
    )
    console.log(response)
    const results = response.data.doctors.filter(
      (doctor) =>
        doctor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
    console.log(results)
    setSearchQuery('')
    toggleSearched(true)
  }
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const clearSearch = () => {
    setSearchResults([])
    toggleSearched(false)
  }

  return (
    <div className="search">
      <Search
        clearSearch={clearSearch}
        value={searchQuery}
        onChange={handleChange}
        onSubmit={getSearchResults}
      />
      {searched && searchResults.length === 0 && (
        <div>
          <p className="noResult">There is no matching result</p>
          {/* <button className="goBack" onClick={handleGoBack}>
            Back to Home
          </button> */}
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h1 className="result">Search Results</h1>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <Link
                className="titlelink"
                to={`/doctors/${result.id}`}
                key={result.id}
              >
                <div className="doctorinfocontainer">
                  <img
                    className="doctorpic"
                    src={result.profile_img}
                    alt="doctor pic"
                  />
                  <div className="doctorname">
                    Dr. {result.firstName} {result.lastName}
                  </div>
                  <div className="doctorspecialty">{result.specialty}</div>
                </div>
                {/* <button className="goBack" onClick={handleGoBack}>
                  Back to Home
                </button> */}
              </Link>
            ))}
          </section>
          <div className="return">
            <Link to="/doctors">Return To Doctors List</Link>
          </div>
        </div>
      )}
      {!searched && (
        <div className="doctors">
          <div className="doctorlist">
            {allDoctors?.map((doctor) => (
              <DocCard
                key={doctor.id}
                id={doctor.id}
                profile_img={doctor.profile_img}
                firstName={doctor.firstName}
                lastName={doctor.lastName}
                specialty={doctor.specialty}
                clinicName={doctor.clinicName}
                network={doctor.network}
                state={doctor.state}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Doctors
