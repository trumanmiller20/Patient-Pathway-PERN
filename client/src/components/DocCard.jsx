const DocCard = () => {
  return (
    <div>
      <div className="infocontainer">
        <img
          className="doctorpic"
          src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="doctor pic"
        />
        <div className="doctorname">Dr. Desmond Blake</div>
        <div className="doctorpractice">General Pratice</div>
        <div className="insurance">
          Insurance Providers Accepted: Blue Cross Blue Shield
        </div>
      </div>
    </div>
  )
}
export default DocCard
