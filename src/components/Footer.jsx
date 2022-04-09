import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <>
    <hr className='footer-hr'/>
    <div className='footer'>
      <div className="footer-info">
        <img className='footer-info-logo' src={logo} alt="logo" />
        <p className='footer-info-text'>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div className="footer-search">
        <input placeholder='Enter your email' type="text" className="footer-search-input"></input>
        <button className='footer-search-button'>Subscribe</button>
      </div>
    </div>
    </>
  )
}

export default Footer