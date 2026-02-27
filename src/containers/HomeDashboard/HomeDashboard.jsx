import React from 'react'
import { usePetContext } from '../../context/PetContext/UsePetContext'
import { AppointmentCard, PetsSumaryCard } from '../../components'
import './HomeDashboard.css'
import { dateFormatter } from '../../utils'


export const HomeDashboard = () => {
    const { getNextAppointment, getPetListLenght } = usePetContext()
    const nextAppointment = getNextAppointment()
    const petsAmount = getPetListLenght()

    const formatedDate = dateFormatter(nextAppointment.date)

    return (
        <div className="dashboard">

            <AppointmentCard imagePath={nextAppointment.petImage} petName={nextAppointment.petName} date={nextAppointment.date} reason={nextAppointment.reason}></AppointmentCard>

            <PetsSumaryCard petsAmount={petsAmount}></PetsSumaryCard>

        </div>

    )
}