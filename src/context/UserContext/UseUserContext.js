import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

export const useUserContext = () => {

    const userContext = useContext(UserContext)

    if(!userContext){
        throw new Error('User Context must be used within UserProvider')
    }

  return userContext
  
}