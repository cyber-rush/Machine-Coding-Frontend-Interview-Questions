import React from 'react'
function Input({ label, inputType, placeholder, value, onChange }) {
    return (
        <div className='input__wrapper'>
            <label className='input__label'>{label}: </label>
            <input type={inputType} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default Input
