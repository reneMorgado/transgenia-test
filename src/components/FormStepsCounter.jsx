import React,{Fragment} from 'react'

const FormStepsCounter = ({totalSteps, currentStep}) => {
  return (
    <div className='counter'>
        {totalSteps.map((step, index) => (
            index !== totalSteps.length - 1 ? <Fragment key={index}><Ball index={index} currentStep={currentStep}/> <Bar index={index} currentStep={currentStep}/></Fragment> 
            : <Ball key={index} index={index} currentStep={currentStep}/> 
        ))}
    </div>
  )
}

const Ball = ({index, currentStep}) => {

    const _getStateClassname = () => (index === currentStep || index < currentStep) ? "counter-ball" : "counter-ball-empty"

    return (
        <div className={_getStateClassname()}>{index+1}</div>
    )
}

const Bar = ({index, currentStep}) => {
    
    const _getProgressClassname = () => index > currentStep ? "counter-bar-empty" : (index < currentStep ? "counter-bar-full" : "counter-bar-half")

    return (
        <div className='counter-bar'>
            <div className={_getProgressClassname()}></div>
        </div>
    )
}

export default FormStepsCounter