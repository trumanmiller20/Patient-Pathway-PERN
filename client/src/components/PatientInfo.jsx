const PatientInfo = ({ thisPatient }) => {
  return (
    <div>
      <div className="patientinfocontainer">
        <img
          className="patientpic"
          src={thisPatient?.profile_img}
          alt="patient pic"
        />
        <div className="info">
          Name:
          {thisPatient?.firstName} {thisPatient?.lastName}
        </div>
        <div className="info">Insurance: {thisPatient?.insurance}</div>
        <div className="info">Date of Birth: {thisPatient?.date_of_birth}</div>
        <div className="info">State: {thisPatient?.state}</div>
      </div>
    </div>
  )
}
export default PatientInfo
