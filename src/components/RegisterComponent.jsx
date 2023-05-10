import React, {useState} from 'react'
import { RegisterAPI, GoogleSigInAPI } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button'

import LinkedinLogoImage from '../assets/linkedinLogo.png'
import '../Sass/LoginComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function RegisterComponent() {
let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  
//------Вход
  const regist = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password)
      toast.success('Account Created!')
      navigate('/home')
      console.log(res);
    } catch (error) {
      toast.error('Can\'t Create your Account')
      console.dir(error);
    }
  }

// ---- Вход с помощью Гугла
const googleSignIn = async() => {
  let res = await GoogleSigInAPI();
    navigate('/home')
}


  return (
    <div className="login-wrapper">
      <img src={LinkedinLogoImage}
       alt="" 
       className='linkedinLogo'/>
      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='textLabel'>Email or phone number</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Email or phone number" 
        onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='textLabel'>Password (6 or more characters)</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password (6 or more characters)" 
        onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
            }/>
      </Form.Group>
    </Form>
   
        </div>
        <Button onClick={regist} className="login-btn">
          Agree & Join
        </Button>
      </div>
      <hr className='hr-text' data-content='or'/>
    <div className='signInWithGoogle'>
      <GoogleButton
          label='Sign in with Google'
          type="light"
          style={{'marginLeft':'5px','boxShadow':'none'}}
          onClick={googleSignIn}
          />
    </div>
          <p className='joinNow'>Already on LinkedIn? <span className='joinNowA' onClick={() => navigate('/')}>Sign in</span></p>
    </div>
  )
}
