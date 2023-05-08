import React from 'react'
import Home from '../Pages/Home'
import TopBar from '../components/common/Topbar/topBar'
import './homeLayout.scss'
export default function HomeLayout() {
  return (
    <div className="home-layout">
      <TopBar />
      <Home />
    </div>
  )
}
