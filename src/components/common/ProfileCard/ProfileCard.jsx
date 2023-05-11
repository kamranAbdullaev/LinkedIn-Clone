import React, {useState, useMemo} from 'react'
import './ProfileCard.scss'
import { getCurrentUser } from '../../../api/FirestoreAPI';
import Button from 'react-bootstrap/Button';
import Loader from '../Loader';



export default function ProfileCard({ onEdit }) {
  
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
  getCurrentUser(setCurrentUser)
  }, [])


  let { name, email } = currentUser;


  return (
    <div className='ool'>
    {currentUser.name ? (


      <div className='profile-card'>
          <div className='edit-btn'>
            <Button variant="light" onClick={onEdit}>Edit</Button>
          </div>    
      <h3 className='userName'>{name}</h3>
      <p className='userEmail'>{email}</p>
        </div>)
        
        
        : (<Loader />)}
    </div>
  )
}
