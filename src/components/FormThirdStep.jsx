import React, { useRef } from 'react'

const FormThirdStep = () => {

    const less10ref = useRef(null)
    const less20ref = useRef(null)
    const less50ref = useRef(null)
    const more50ref = useRef(null)

    const less10roundRef = useRef(null)
    const less20roundRef = useRef(null)
    const less50roundRef = useRef(null)
    const more50roundRef = useRef(null)



    const _setSelected = (e) => {
        less10ref.current.className = 'selector'
        less20ref.current.className = 'selector'
        less50ref.current.className = 'selector'
        more50ref.current.className = 'selector'
        less10roundRef.current.className = 'selector-round'
        less20roundRef.current.className = 'selector-round'
        less50roundRef.current.className = 'selector-round'
        more50roundRef.current.className = 'selector-round'
        switch (e.target.getAttribute('select-value')) {
            case 'less10':
                less10ref.current.className = 'selector-selected'
                less10roundRef.current.className = 'selector-round-selected'
                break;
            case 'less20':
                less20ref.current.className = 'selector-selected'
                less20roundRef.current.className = 'selector-round-selected'
                break;
            case 'less50':
                less50ref.current.className = 'selector-selected'
                less50roundRef.current.className = 'selector-round-selected'
                break;
            case 'more50':
                more50ref.current.className = 'selector-selected'
                more50roundRef.current.className = 'selector-round-selected'
                break;
            default:
                break;
        }
    }

    return (
        <div className='step'>
            <h1 className='step-title'>What’s your project budget?</h1>
            <p className='step-subtitle'>Please select the project budget range you have in mind.</p>
            <div className="step-inputs">
                <div className="selector" onClick={_setSelected} ref={less10ref} select-value="less10">
                    <div className="selector-round" onClick={_setSelected} ref={less10roundRef} select-value="less10"></div>
                    <p className="selector-label" onClick={_setSelected} select-value="less10">$5.000 - $10.000</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={less20ref} select-value="less20">
                    <div className="selector-round" onClick={_setSelected} ref={less20roundRef} select-value="less20"></div>
                    <p className="selector-label" onClick={_setSelected} select-value="less20">$10.000 - $20.000</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={less50ref} select-value="less50">
                    <div className="selector-round" onClick={_setSelected} ref={less50roundRef} select-value="less50"></div>
                    <p className="selector-label" onClick={_setSelected} select-value="less50">$20.000 - $50.000</p>
                </div>
                <div className="selector" onClick={_setSelected} ref={more50ref}  select-value="more50">
                    <div className="selector-round" onClick={_setSelected} ref={more50roundRef} select-value="more50"></div>
                    <p className="selector-label" onClick={_setSelected} select-value="more50">$50.000 +</p>
                </div>
            </div>
        </div>
    )
}

export default FormThirdStep