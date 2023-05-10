import React from 'react'
import { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI';
import TopBar from '../components/common/Topbar/topBar';
import Profile from '../Pages/Profile'

export default function ProfileLayout() {
  return (
    <div>
      <TopBar />
      <Profile />
    </div>
  )
}
