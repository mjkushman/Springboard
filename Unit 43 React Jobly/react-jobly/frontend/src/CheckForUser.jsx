import {useContext} from 'react'
import UserContext from './UserContext'

const CheckForUser = () => {
    const { currentUser } = useContext(UserContext);
    if (currentUser.username) {
      return true
    } else {
      console.log("you must log in to see that");
      return false}

}

export default CheckForUser