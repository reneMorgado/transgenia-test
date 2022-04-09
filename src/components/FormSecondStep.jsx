import React, { useRef } from 'react'
import development from '../assets/development.svg'
import design from '../assets/design.svg'
import marketing from '../assets/marketing.svg'
import other from '../assets/other.svg'

const FormSecondStep = () => {

    const developmentRef = useRef(null)
    const designRef = useRef(null)
    const marketingRef = useRef(null)
    const otherRef = useRef(null)

    const _setSelected = (e) => {
        developmentRef.current.className = 'selector'
        designRef.current.className = 'selector'
        marketingRef.current.className = 'selector'
        otherRef.current.className = 'selector'
        switch (e.target.getAttribute('select-value')) {
            case 'development':
                developmentRef.current.className = 'selector-selected'
                break;
            case 'design':
                designRef.current.className = 'selector-selected'
                break;
            case 'marketing':
                marketingRef.current.className = 'selector-selected'
                break;
            case 'other':
                otherRef.current.className = 'selector-selected'
                break;
            default:
                break;
        }
    }

    return (
        <div className='step'>
            <h1 className='step-title'>Our services</h1>
            <p className='step-subtitle'>Please select which service you are interested in.</p>
            <div className="step-inputs">
                <div className="selector" onClick={_setSelected} ref={developmentRef} select-value="development">
                    <img className='selector-img' onClick={_setSelected} src={development} alt="development" />
                    <p className="selector-label" onClick={_setSelected} select-value="development">Development</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={designRef} select-value="design">
                    <img className='selector-img' onClick={_setSelected} src={design} alt="design" select-value="design"/>
                    <p className="selector-label" onClick={_setSelected} select-value="design">Web Design</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={marketingRef} select-value="marketing">
                    <img className='selector-img' onClick={_setSelected} src={marketing} alt="marketing" select-value="marketing"/>
                    <p className="selector-label" onClick={_setSelected} select-value="marketing">Marketing</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={otherRef}  select-value="other">
                    <img className='selector-img' onClick={_setSelected} src={other} alt="other" select-value="other" />
                    <p className="selector-label" onClick={_setSelected} select-value="other">Other</p>
                </div>
            </div>
        </div>
    )
}

export default FormSecondStep