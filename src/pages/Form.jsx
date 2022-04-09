import React, { useState } from 'react'
import FormFinalStep from '../components/FormFinalStep'
import FormFirstStep from '../components/FormFirstStep'
import FormSecondStep from '../components/FormSecondStep'
import FormStepsCounter from '../components/FormStepsCounter'
import FormThirdStep from '../components/FormThirdStep'

const Form = () => {

  const [currentStep, setCurrentStep] = useState(0)

  const Steps = [
    <FormFirstStep/>,
    <FormSecondStep/>,
    <FormThirdStep/>,
    <FormFinalStep/>
  ]

  const _nextStep = () => {
    let nextStep = currentStep + 1
    if(nextStep <= Steps.length){
      setCurrentStep(nextStep)
    }
  }

  const _previousStep = () => {
    let previousStep = currentStep - 1
    if(previousStep >= 0){
      setCurrentStep(previousStep)
    }
  }

  return (
    <div className='form'>
        <h1 className='form-title'>Get a project quote</h1>
        <p className='form-subtitle'>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
        <div className="form-steps">
          <FormStepsCounter totalSteps={Steps} currentStep={currentStep}/>
          <hr className='form-steps-divider'/>
          {Steps[currentStep]}
        </div>
        <div className="form-buttons">
          { currentStep > 0 && <button className='form-buttons-previous'onClick={_previousStep}>Previous Step</button>}
          { currentStep < Steps.length -1 && <button className='form-buttons-next' onClick={_nextStep}>Next Step</button>}
        </div>
    </div>
  )
}

export default Form