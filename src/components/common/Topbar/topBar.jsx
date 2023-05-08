import React from 'react';
import './topBar.scss';
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome,AiOutlineSearch,AiOutlineMessage, AiOutlineBell } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import linkedInLogo from '../../../assets/linkedin-logo-homePage-1837.png'
import userLogo from '../../../assets/profile.png'

export default function TopBar() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route)
  }
  return (
    <div className='topbar-main'>
      <div className="react-icons">
      <img src={linkedInLogo} 
           className='linkedIn-logo'
           alt="LinkedIn Logo" />
      <AiOutlineSearch size={35} 
                       className="react-icon"
                       onClick={() => goToRoute()}/>
      <AiOutlineHome size={35} 
                     className="react-icon"
                     onClick={() => goToRoute("/home")}/>
      <FiUsers size={35} 
               className="react-icon"
               onClick={() => goToRoute("/profile")}/>
      <BsBriefcase size={35} 
                   className="react-icon"
                   onClick={() => goToRoute()}/>
      <AiOutlineMessage size={35}
                        className="react-icon"
                        onClick={() => goToRoute()}/>
      <AiOutlineBell size={35} 
                     className="react-icon"
                     onClick={() => goToRoute()}/>
      <img src={userLogo} 
           className='user-logo'
           alt="user" />
      </div>
    </div>
  )
}