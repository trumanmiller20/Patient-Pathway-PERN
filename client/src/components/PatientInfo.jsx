const PatientInfo = ({ thisPatient }) => {
  return (
    <div>
      <div className="patientinfocontainer">
        <img
          className="patientpic"
          src={thisPatient?.profile_img}
          alt="patient pic"
        />
        <div className="patientname">
          {thisPatient?.firstName} {thisPatient?.lastName}
        </div>
        <div className="insurance">Insurance: {thisPatient?.insurance}</div>
        <div className="DOB">Date of Birth: {thisPatient?.date_of_birth}</div>
        <div className="state">State: {thisPatient?.state}</div>
      </div>
    </div>
  )
}
export default PatientInfo
