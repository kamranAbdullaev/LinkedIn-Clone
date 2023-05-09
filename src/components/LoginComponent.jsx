import React, {useState} from 'react'
import { LoginAPI, GoogleSigInAPI } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button'

import LinkedinLogoImage from '../assets/linkedinLogo.png'
import '../Sass/LoginComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function LoginComponent() {
let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
//------Вход
  const login = async () => {

    try {
      let res = await LoginAPI(credentails.email, credentails.password)
      toast.success('Signed In to LinkedIn!')
      navigate('/home')
      console.log(res);
    } catch (error) {
      toast.error('Please Check your Credentials')
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
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='textLabel'>Email address</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Enter email" 
        onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='textLabel'>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
            }/>
      </Form.Group>
    </Form>
   
        </div>
        <Button onClick={login} className="login-btn">
          Sign in
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
          <p className='joinNow'>New to LinkedIn? <span className='joinNowA' onClick={() => navigate('/register')}>Join Now</span></p>
    </div>
  )
}
