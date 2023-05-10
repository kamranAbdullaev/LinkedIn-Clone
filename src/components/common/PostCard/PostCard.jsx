import React from 'react'
import './PostCard.scss'


export default function PostCard({posts, id}) {
  return (
    <div className='posts-card' key={id}>
      <p className='nameUser'>{posts.userName}</p>
      <p className='timestamp'>{posts.timeStamp}</p>
      <hr />
      <p className='status'>{posts.status}</p>
    </div>
  )
}
