import React, { useContext } from 'react'
import { PetContext } from './PetProvider'

export const usePetContext = () => {

    const petContext = useContext(PetContext)

    if(!petContext){
        throw new Error('User Context must be used within PetProvider')
    }

  return petContext
  
}