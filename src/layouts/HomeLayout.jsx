import React, {useMemo, useState} from 'react'
import Home from '../Pages/Home'
import TopBar from '../components/common/Topbar/topBar'
import { getCurrentUser } from '../api/FirestoreAPI'
import './homeLayout.scss'




export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  },[])

  return (
    <div className="home-layout">
      <TopBar />
      <Home currentUser={currentUser} />
    </div>
  )
}
