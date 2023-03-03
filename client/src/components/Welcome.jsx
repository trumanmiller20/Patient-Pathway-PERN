import SignIn from './SignIn'
import Register from './Register'
import { useState, useEffect } from 'react'

const Welcome = () => {
  const [showing, setShowing] = useState(false)

  return (
    <div>
      <h1>Welcome!</h1>
      {showing ? (
        <Register setShowing={setShowing} />
      ) : (
        <SignIn setShowing={setShowing} />
      )}
    </div>
  )
}
export default Welcome
