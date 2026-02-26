import React from 'react'
import './ConfirmationModal.css'
import PropTypes from 'prop-types'




export const ConfirmationModal = ({ isOpen, label, Icon, buttonLabel, onCloseMethod }) => {

    return (


        <div className= {`${isOpen && 'confirmation-modal-backdrop'}`}>
            <div className={`confirmation-modal ${isOpen && 'confirmation-modal-open'}`}>
                <p className='confirmation-modal__title'> {label} </p>
                <Icon size={45}></Icon>
                <button className='confirmation-modal__button' onClick={onCloseMethod}>{buttonLabel}</button>
            </div>

        </div>






    )
}


ConfirmationModal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCloseMethod: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    buttonLabel: PropTypes.string.isRequired


}