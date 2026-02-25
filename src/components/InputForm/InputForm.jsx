import React from 'react'
import PropTypes from 'prop-types'
import './InputForm.css'

export const InputForm = ({Icon, inputName, placeholder, value, onChange, disabled}) => {
    return (
        <div className="input-field">
            <label htmlFor= {inputName} className='input-field__icon'><Icon size = {22}></Icon></label>
            <input className='input' type="text" name= {inputName} value={value} placeholder= {placeholder} id= {inputName}  onChange={onChange} disabled={disabled} required />

        </div>
    )
}


InputForm.PropTypes = {
    Icon : PropTypes.elementType.isRequired,
    inputName : PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool



}