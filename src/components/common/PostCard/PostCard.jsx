import React from 'react'
import './PostCard.scss'


export default function PostCard({posts}) {
  return (
    <div className='posts-card'>
      <p className='status'>{posts.status}</p>
    </div>
  )
}
