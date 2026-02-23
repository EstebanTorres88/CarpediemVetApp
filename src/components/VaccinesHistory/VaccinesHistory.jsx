import React from 'react'
import PropTypes from 'prop-types'
import './VaccinesHistory.css'
import { Syringe } from 'lucide-react'
import { dateFormatter } from '../../utils'

export const VaccinesHistory = ({vaccineDate, vaccineName}) => {

    const formatedDate = dateFormatter(vaccineDate)
  return (
    <div className='vaccines-history'>
        
        <Syringe></Syringe>
        <h3 className='vaccines-history__vaccine-name'>{vaccineName}</h3>
        <p className='vaccines-history__vaccine-date'>{formatedDate}</p>
        




    </div>
  )
}


VaccinesHistory.PropTypes = {
    vaccineDate : PropTypes.string.isRequired,
    vaccineName : PropTypes.string.isRequired

}

