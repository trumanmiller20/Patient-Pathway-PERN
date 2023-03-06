import { Link } from 'react-router-dom'
import DocCard from '../components/DocCard'

const Doctors = () => {
  return (
    <div className="doctors">
      <div className="search">Search Functionality goes here</div>
      <div className="doctorlist">
        <Link to="/doctors/:doctor_id">
          <DocCard />
        </Link>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </div>
    </div>
  )
}

export default Doctors
