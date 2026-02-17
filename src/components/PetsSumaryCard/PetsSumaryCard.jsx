import React from 'react'
import PropTypes from 'prop-types'
import './PetsSumaryCard.css'

export const PetsSumaryCard = ({petsAmount}) => {
  return (
    <div>
        
       <div className="pets-sumary-card">
            <h2 className='pets-sumary-card__title'>Mascotas Registradas</h2>
            <p className='pets-sumary-card__pets-amount'>{petsAmount}</p>
       </div>




    </div>
  )
}


PetsSumaryCard.PropTypes = {
    petsAmount: PropTypes.number.isRequired

}