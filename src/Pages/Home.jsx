import React, {useEffect, useState} from 'react'
import HomeComponent from '../components/HomeComponent'
import Loader from '../components/common/Loader'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'


export default function Home({currentUser}) {

  const [loading, setLoading] = useState(true)
  let navigate = new useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, res => {
      if(!res?.accessToken){
        navigate('/')
      }else{
        setLoading(false)
      }
    })

  }, [])

  return (loading ? <Loader /> : <HomeComponent currentUser={currentUser} />)
  
}
