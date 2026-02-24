import React, { useState } from 'react'
import { usePetContext } from '../../context/PetContext/UsePetContext'
import { NavLink, useParams } from 'react-router-dom'
import './PetProfile.css'
import { CornerUpLeft } from 'lucide-react'
import {GeneralDetails, Tabs, VaccinesHistory, AppointmentsHistory} from '../../components'

export const PetProfile = () => {
    const { petName } = useParams()
    const { getPetInfo } = usePetContext()
    const {petInfo} = getPetInfo(petName)
    const [activeTab, setActiveTab] = useState('summary')
    const petVaccines = petInfo.vaccines
    const petAppointments = petInfo.vetAppointments

    const toggleActiveTab = (tabName) => {
        setActiveTab(tabName)
    }

    return (
      <section className='pet-profile'>
        <NavLink to={'/mypets'} className={'back-icon'}><CornerUpLeft size={40}></CornerUpLeft></NavLink>
        <h2 className='pet-ptofile-title'>Perfil de {petInfo.name}</h2>

        <div className='pet-tabs'>
          <tabs parentMethod={toggleActiveTab}></tabs>
        </div>

        <div className='pet-content'>
          {activeTab === 'summary' && 
          <GeneralDetails name={petInfo.name} age={petInfo.age} breed={petInfo.breed} weight={petInfo.weight} image={petInfo.image} species={petInfo.species} allergies={petInfo.allergies} />}

          {activeTab === 'vaccines' && 
          petVaccines.map((vaccine) => (
            <VaccinesHistory key={vaccine.name} vaccineDate={vaccine.date} vaccineName={vaccine.name}></VaccinesHistory>
          ))}

          {activeTab === 'vaccines' && petVaccines.length === 0 && <p>No hay vacunas registradas para {petInfo.name}.</p>}

          {activeTab === 'appointments' && 
          petAppointments.map((appointment) => (
            <AppointmentsHistory key={appointment.id} appointmentDate={appointment.date} appointmentReason={appointment.reason} appointmentState={appointment.state}></AppointmentsHistory>
          ))}

          {activeTab === 'appointments' && petAppointments.length === 0 && <p>No hay citas registradas para {petInfo.name}.</p>}

        </div>
      </section>
    )
}
