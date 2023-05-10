import React from 'react'
import { onLogout } from '../../../api/AuthAPI'
import './ProfilePopup.scss'

export default function ProfilePopup() {
  onLogout()
}
