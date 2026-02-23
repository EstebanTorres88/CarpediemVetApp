import { CalendarClock, CheckCircle, Stethoscope } from 'lucide-react'
import PropTypes from 'prop-types'
import React from 'react'
import './AppointmentsHistory.css'
import { dateFormatter } from '../../utils'

export const AppointmentsHistory = ({appointmentDate,appointmentReason, appointmentState}) => {
    const formatedDate = dateFormatter(appointmentDate)

  return (
    <div className='appointments-history'>
        <Stethoscope></Stethoscope>
        <h3 className='appointments-history__reason'>{appointmentReason}</h3>
        <p className='appointments-history__date'>{formatedDate}</p>
        <p >{appointmentState === 'Realized' ? <CheckCircle></CheckCircle> : <CalendarClock></CalendarClock> }</p>


    </div>
  )
}

AppointmentsHistory.PropTypes = {
    appointmentDate : PropTypes.string.isRequired,
    appointmentState : PropTypes.string.isRequired,
    appointmentReason : PropTypes.string.isRequired
}