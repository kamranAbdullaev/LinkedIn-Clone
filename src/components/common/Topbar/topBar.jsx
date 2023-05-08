import React from 'react';
import './topBar.scss';
import linkedInLogo from '../../../assets/linkedin-logo-homePage-1837.png'

export default function TopBar() {
  return (
    <div className='topbar-main'>
      <img src={linkedInLogo} 
      className='linkedIn-logo'
      alt="" />

    </div>
  )
}
