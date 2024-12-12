import React, { useEffect } from 'react'
import Header from './Header'
import { BG_IMAGE } from '../services/urlsservice'
import Footer from './Footer'

const LoginPage = () => {
 

  return (
    <div>
      <Header/>
      <div >
        <img className='min-h-screen' src={BG_IMAGE}/>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage

