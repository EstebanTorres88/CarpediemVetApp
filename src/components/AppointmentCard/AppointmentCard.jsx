import React from 'react'
import './AppointmentCard.css'
import PropTypes from 'prop-types'

export const AppointmentCard = ({imagePath, petName, date, reason}) => {
    return (
        <div>

            <div className="appointment-card">
                <h2 className='appointment-card__title'>Próxima Cita</h2>
                <div className="appointment-card__pet-info">
                    <img className='appointment-card__pet-img' src={imagePath} alt="pet-image" />
                    <h3 className='appointment-card__pet-name'>{petName}</h3>
                </div>
                <p className='appointment-card__date'>{date}</p>
                <p className='appointment-card__reason'>Motivo: {reason}</p>
            </div>
        </div>
    )
}


AppointmentCard.PropTypes = {

    imagePath: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired

}