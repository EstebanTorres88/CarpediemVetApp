import React from 'react'
import PropTypes from 'prop-types'
import './GeneralDetails.css'
export const GeneralDetails = ({image, name, species, breed, age, weight, allergies}) => {

    return (
        <div className="pet-profile__resume">

            <img className='pet-profile__image' src={image} alt="Pet Image" />

            <div className="pet-profile__details">
                <h3 className='details__title'>Detalles Generales</h3>
                <p><strong className='details__name'>Nombre: </strong> {name}</p>
                <p><strong className='details__name'>Especie: </strong> {species}</p>
                <p><strong className='details__name'>Raza: </strong> {breed}</p>
                <p><strong className='details__name'>Edad: </strong> {age} {age === 1 ? 'año' : 'años'}</p>
                <p><strong className='details__name'>Peso: </strong> {weight}</p>
                <p><strong className='details__name'>Alergias: </strong> {allergies}</p>
            </div>

        </div>
    )
}


GeneralDetails.PropTypes = {
    image : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    species : PropTypes.string.isRequired,
    breed :PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    weight : PropTypes.string.isRequired,
    allergies : PropTypes.string.isRequired
}