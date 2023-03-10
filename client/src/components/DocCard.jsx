import { Link } from 'react-router-dom'
// import DocProfile from '../pages/DocProfile'

const DocCard = (props) => {
  return (
    <div>
      <Link className="titlelink" to={`/doctors/${props.id}`}>
        <div className="doctorinfocontainer">
          <img className="doctorpic" src={props.profile_img} alt="doctor pic" />
          <div className="doctorname">
            Dr. {props.firstName} {props.lastName}
          </div>
          <div className="doctorname">{props.specialty}</div>
        </div>
      </Link>
    </div>
  )
}
export default DocCard
