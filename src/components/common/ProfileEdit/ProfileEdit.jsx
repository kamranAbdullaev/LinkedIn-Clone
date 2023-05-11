import React, { useState } from 'react'
import './ProfileEdit.scss'
import Button from 'react-bootstrap/Button';
import { editProfile } from '../../../api/FirestoreAPI';

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInput, setEditInput] = useState({});
console.log(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value }
    setEditInput({...editInput, ...input});
  }

  
  const updateProfileData = () => {
    editProfile(currentUser?.currentUser.userID, editInput);
  }

  return (
    <div className='ool'>
    <div className='profile-card'>
      <div className='edit-btn'>
        <Button variant="light" onClick={onEdit}>Back</Button>
      </div> 
      <div className='profile-edit-inputs'>
        <input 
        onChange={getInput} 
        type="text" 
        className='edit-input' 
        placeholder='Name'
        name='name' />
        <input 
        onChange={getInput} 
        type="text" 
        className='edit-input' 
        placeholder='Headline'
        name='headline' />
        <input 
        onChange={getInput} 
        type="text" 
        className='edit-input' 
        placeholder='Location'
        name='location' />
        <input 
        onChange={getInput} 
        type="text" 
        className='edit-input' 
        placeholder='Company'
        name='company' />
        <input 
        onChange={getInput} 
        type="text" 
        className='edit-input' 
        placeholder='College'
        name='college' />
        </div>
        <div className='save-container'>
          <Button variant="primary" className='btn-save' onClick={updateProfileData}>Save</Button>
        </div>
      </div>
    </div>
  )
}
