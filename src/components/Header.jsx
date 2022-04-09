import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <img className='header-img' src={logo} alt="logo" />
      <button className='header-button'>Clone now</button>
    </div>
  )
}

export default Header