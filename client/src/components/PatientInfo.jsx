const PatientInfo = ({ thisPatient }) => {
  return (
    <div>
      <div className="patientinfocontainer">
        <p className="pp">
          <i>Patient-Pathway Card</i>
        </p>

        <div class="img">
          <img
            className="patientpic"
            src={thisPatient?.profile_img}
            alt="patient pic"
          />
        </div>
        <div className="person">
          <div className="info">
            <span>Name:</span>
            {thisPatient?.firstName} {thisPatient?.lastName}
          </div>
          <div className="info">
            <span>Insurance:</span> {thisPatient?.insurance}
          </div>
          <div className="info">
            <span>Date of Birth:</span> {thisPatient?.date_of_birth}
          </div>
          <div className="info">
            <span>State:</span> {thisPatient?.state}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PatientInfo
