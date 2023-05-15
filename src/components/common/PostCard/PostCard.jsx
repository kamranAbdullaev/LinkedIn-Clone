import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PostCard.scss'


export default function PostCard({ posts, id }) {
  let navigate = useNavigate();
  return (
    <div className='posts-card' key={id}>
      <p className='nameUser' onClick={() => navigate('/profile')}>{posts.userName}</p>
      <p className='timestamp'>{posts.timeStamp}</p>
      <hr />
      <p className='status'>{posts.status}</p>
    </div>
  )
}
