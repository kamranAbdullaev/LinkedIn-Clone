import React, {useState} from 'react';
import './topBar.scss';
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome,AiOutlineSearch,AiOutlineMessage, AiOutlineBell } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import linkedInLogo from '../../../assets/linkedin-logo-homePage-1837.png'
import userLogo from '../../../assets/profile.png'
import ProfilePopup from '../ProfilePopup/ProfilePopup'
import Dropdown from 'react-bootstrap/Dropdown';

export default function TopBar() {
const [popupVisible, setPopupVisible] = useState(false);

  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route)
  }

    const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
  return (


    <div className='topbar-main'>

      {popupVisible ? <ProfilePopup /> : <></>}
      
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
          onClick={() => goToRoute()} />
        
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
      <img src={userLogo} 
          className='user-logo'
          alt="user"/>
          </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={displayPopup}>Logout</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
  </Dropdown>
      </div>
    </div>
  )
}
