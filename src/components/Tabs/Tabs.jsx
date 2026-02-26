import React from 'react'
import PropTypes from 'prop-types'
import './Tabs.css'
export const Tabs = ({ parentMethod, activeTab }) => {

  return (
    <div className='tabs'>
      <button
        className={`tabs__button ${activeTab === 'summary' ? 'tabs__button--active' : ''}`}
        onClick={() => parentMethod('summary')}
      >
        Resumen
      </button>
      <button
        className={`tabs__button ${activeTab === 'vaccines' ? 'tabs__button--active' : ''}`}
        onClick={() => parentMethod('vaccines')}
      >
        Vacunas
      </button>
      <button
        className={`tabs__button ${activeTab === 'appointments' ? 'tabs__button--active' : ''}`}
        onClick={() => parentMethod('appointments')}
      >
        Citas
      </button>
    </div>
  )
}

Tabs.propTypes = {
  parentMethod: PropTypes.func.isRequired,
  activeTab: PropTypes.string
}

