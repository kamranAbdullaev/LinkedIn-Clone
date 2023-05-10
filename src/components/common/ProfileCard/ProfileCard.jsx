import React, {useState, useMemo} from 'react'
import './ProfileCard.scss'
import { getCurrentUser } from '../../../api/FirestoreAPI';
import Loader from '../Loader';
export default function ProfileCard() {
  const [currentUser, setCurrentUser] = useState({});
  
  useMemo(() => {
  getCurrentUser(setCurrentUser)
  }, [])

  if (currentUser.name) {
    console.log("true");
  } else {
    console.log(false);
  }
  let { name, email } = currentUser;
  console.log(currentUser);
  return (

    <div className='profile-card'>
      {currentUser.name ? (
        <div>
          {name}
        </div>)
        
        
        : (<Loader />)}
    </div>
  )
}
