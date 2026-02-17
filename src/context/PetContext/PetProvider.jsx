import React, { createContext, useEffect} from 'react'
import { PET_LIST } from '../../data/PetList/PetList';

export const PetContext = createContext(null);

const PET_KEY = 'pets'


export const PetProvider = ({ children }) => {

  useEffect(() => {
    localStorage.setItem(PET_KEY, PET_LIST)
  }, [])


  const getPetInfo = (petName) => {

    const petFound = PET_LIST.find(pet => pet.name === petName)

    return petFound
  }


  const getPetListLenght = () =>{
    return PET_LIST.length
  }


  const getNextAppointment = () =>{
    const pendingAppointments = PET_LIST.flatMap(pet => pet.vetAppointments.map(appointment =>({
      ...appointment,
      petName: pet.name,
      petImage: pet.image

    }))).filter(appointment => appointment.state === 'Pending')


    

    const nextAppointment = pendingAppointments
    .reduce((closest, current) =>{

      if(!closest) return current

      const actualDate = new Date(current.date)
      const closestDate = new Date(closest.date)


      return actualDate < closestDate ? current : closest
    }, null)

    return nextAppointment
  }



  return (
    <PetContext.Provider value={{ getPetInfo, getNextAppointment, getPetListLenght }}>

      {children}
    </PetContext.Provider>
  )
}