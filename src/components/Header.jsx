import React from 'react'
import { LOGO_URL } from '../services/urlsservice'
import LoginForm from '../pages/LoginForm'

const Header = () => {
  return (
    <>
    <div className='absolute bg-gradient-to-b from-black'>
      <img src={LOGO_URL} className='w-48'/>
    </div>
    <LoginForm/>

    </>
  )
}

export default Header
