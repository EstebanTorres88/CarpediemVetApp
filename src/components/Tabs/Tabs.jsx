import React from 'react'
import PropTypes from 'prop-types'
import './PetProfileTabs.css'
export const Tabs = ({ parentMethod }) => {

  return (
    <div className='tabs'>
      <button className='tabs__button' onClick={() => parentMethod('summary')}>Resumen</button>
      <button className='tabs__button' onClick={() => parentMethod('vaccines')}>Vacunas</button>
      <button className='tabs__button' onClick={() => parentMethod('appointments')}>Citas</button>
    </div>
  )
}

Tabs.PropTypes = {
  parentMethod: PropTypes.func.isRequired
}

