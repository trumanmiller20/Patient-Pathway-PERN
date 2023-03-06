const PatientInfo = () => {
  return (
    <div>
      <div className="patientinfocontainer">
        <img
          className="patientpic"
          src="https://images.pexels.com/photos/8065800/pexels-photo-8065800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="patient pic"
        />
        <div className="patientname">Billy</div>
        <div className="insurance">Insurance: Blue Cross Blue Shield</div>
      </div>
    </div>
  )
}
export default PatientInfo
