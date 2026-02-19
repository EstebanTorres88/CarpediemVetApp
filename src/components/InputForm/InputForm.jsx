import React from 'react'
import PropTypes from 'prop-types'
import './InputForm.css'

export const InputForm = ({Icon, inputName, placeholder}) => {
    return (
        <div className="input-field">
            <label htmlFor= {inputName} className='input-field__icon'><Icon size = {22}></Icon></label>
            <input className='input' type="text" name= {inputName} placeholder= {placeholder} id= {inputName} required />

        </div>
    )
}


InputForm.PropTypes = {
    Icon : PropTypes.elementType.isRequired,
    inputName : PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired

}