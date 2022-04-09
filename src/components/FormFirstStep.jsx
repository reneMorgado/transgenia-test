import React from 'react'
import people from '../assets/people.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import company from '../assets/company.svg'

const FormFirstStep = () => {
  return (
    <div className='step'>
        <h1 className='step-title'>Contact details</h1>
        <p className='step-subtitle'>Lorem ipsum dolor sit amet consectetur adipisc.</p>
        <div className="step-inputs">
            <div className="input">
                <h1 className="input-title">Name</h1>
                <div className="input-container">
                    <input type="text" placeholder='John Carter' className='input-container-field' />
                    <img className='input-container-icon-small' src={people} alt="people"></img>
                </div>
            </div>
            <div className="input">
                <h1 className="input-title">Email</h1>
                <div className="input-container">
                    <input type="text" placeholder='Email address' className='input-container-field' />
                    <img className='input-container-icon-small' src={mail} alt="mail"></img>
                </div>
            </div>
            <div className="input">
                <h1 className="input-title">Phone number</h1>
                <div className="input-container">
                    <input type="text" placeholder='(123) 456 - 7890' className='input-container-field' />
                    <img className='input-container-icon-small' src={phone} alt="phone"></img>
                </div>
            </div>
            <div className="input">
                <h1 className="input-title">Company</h1>
                <div className="input-container">
                    <input type="text" placeholder='Company name' className='input-container-field' />
                    <img className='input-container-icon-small' src={company} alt="people"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormFirstStep