import React from 'react'
import PostUpdate from './common/PostUpdate/postUpdate'

export default function HomeComponent({currentUser}) {
  return (
    <div className="home-component">
      <PostUpdate currentUser={currentUser} /> 
      </div>
  )
}
