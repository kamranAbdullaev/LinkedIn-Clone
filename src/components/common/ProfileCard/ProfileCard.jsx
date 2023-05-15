import React, {useState, useMemo} from 'react'
import './ProfileCard.scss'
import { getCurrentUser, getStatus} from '../../../api/FirestoreAPI';
import Button from 'react-bootstrap/Button';
import Loader from '../Loader';
import PostCard from '../PostCard/PostCard';
import { getUniqueId } from '../../../helpers/getUniqueId';

export default function ProfileCard({ onEdit }) {
  
  const [currentUser, setCurrentUser] = useState({});
  const [allStatus, setAllStatus] = useState([]);
  
  useMemo(() => {
    getCurrentUser(setCurrentUser)
    getStatus(setAllStatus)
  }, [])

  let { name, email, headline, location, company, college } = currentUser;

  return (
    <div className='ool'>
    {currentUser.name ? (

    <>
      <div className='profile-card'>
          <div className='edit-btn'>
            <Button variant="light" onClick={onEdit}>Edit</Button>
          </div>    
            <div className='profile-info'>
            <div>
              <h3 className='userName'>{name}</h3>
              <p className='userEmail'>{email}</p>
              <p className='userHeadline'>{headline}</p>
              <h4 className='userLocation'>{location}</h4>
            </div>
              <div className='rightBlock'>
                <p className='userCompany'>{company}</p>
                <p className='userCollege'>{college}</p>
             </div>
           </div>
          </div>
           <div>
            {allStatus.filter((item) => {
                return item.userEmail === localStorage.getItem('userEmail')
              }).map((posts) => {
                return (
                  <div  className='postCard2' key={posts.id}>
                    <PostCard posts={posts}/>
                  </div>
                    )
                })}
          </div>
          
        </>)
        
        : (<Loader />)}
    </div>
  )
}
