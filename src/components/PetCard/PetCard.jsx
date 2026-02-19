
import React from 'react'
import { NavLink } from 'react-router-dom'
import './PetCard.css'
import PropTypes from 'prop-types'


export const PetCard = ({name, image, species, age}) => {


    return (
        <>


           

                <section className='pet-card' key={name}>

                    <NavLink to={`/mypets/${name}`}> <img className='pet-card__image' src={image} alt="pet-image" /></NavLink>
                    <div className="pet-card__pet-details">
                        <h3 className='pet-details__name'>{name}</h3>
                        <p className='pet-details__species'>{species}</p>
                        <p className='pet-details__age'> {age} {age === 1 ? 'año' : 'años'} </p>

                        <NavLink to={`/mypets/${name}`}><button className='pet-details__button'>Ver Perfil</button></NavLink>

                    </div>


                </section>









        </>
    )
}


PetCard.PropTypes = {
    name : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    species : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}
