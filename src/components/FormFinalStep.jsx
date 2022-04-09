import React from 'react'
import final from '../assets/final.svg'

const FormFinalStep = () => {
    return (
        <div className='step'>
            <div className="step-final">
                <img className='step-final-img' src={final} alt="final" />
                <h1 className='step-final-title'>Submit your quote request</h1>
                <p className='step-final-description'>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
                <button className='step-final-button'>Submit</button>
            </div>
        </div>
    )
}

export default FormFinalStep