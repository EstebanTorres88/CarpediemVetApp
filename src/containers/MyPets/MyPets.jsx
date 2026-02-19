
import React from 'react'
import { PetCard } from '../../components'
import './MyPets.css'
import { PET_LIST } from '../../data/PetList/PetList'

export const MyPets = () => {
  return (
    <section className='my-pets'>
      <h2 className='my-pets__title'>Tus Mascotas</h2>

        <div className="my-pets__card">

          {PET_LIST.map((pet) => (
            <PetCard key={pet.name} name={pet.name} image={pet.image} species={pet.species} age={pet.age}></PetCard>

          ))}
     


        </div>
        

    </section>
  )
}
