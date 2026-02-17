import React from 'react'
import './HomeCard.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


export const HomeCard = ({ label, Icon, path }) => {



  return (
    <div className="home-card">

      <NavLink  className='home-card__icon' to={path}> <Icon size={85}></Icon></NavLink>


      <NavLink className='home-card__link' to={path}>{label}</NavLink>



    </div>
  )
}

HomeCard.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired

}