import React from 'react'
import { useUserContext } from '../context/UserContext/UseUserContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateGuard = () => {
    const {isUserUndefined}  = useUserContext()
  
  
    return isUserUndefined() ? <Navigate to={'/home'} replace/>  :  <Outlet></Outlet>

}