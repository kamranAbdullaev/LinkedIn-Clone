import React, {useState, useMemo} from 'react'
import ProfileCard from '../components/common/ProfileCard/ProfileCard'
import ProfileEdit from './common/ProfileEdit/ProfileEdit';
import '../Sass/profileComponent.scss'
import { getCurrentUser } from '../api/FirestoreAPI';

export default function ProfileComponent() {
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const onEdit = () => {
    setIsEdit(!isEdit)
  }

useMemo(() => {
  getCurrentUser(setCurrentUser)
}, [])
  
  let user = { currentUser }
  return (
    <div className='profile-card-One'>
      {isEdit ? <ProfileEdit onEdit={onEdit} currentUser={user}/> : <ProfileCard onEdit={onEdit} />}
      
    </div>
  )
}
