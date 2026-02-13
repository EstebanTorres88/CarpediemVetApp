import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext(null)
const USER_KEY = 'user'
const USER_INITIAL_STATE = {
    name: '',
    email:'',
    phone:''
}





const getInitialState = () => {
    const savedUser = localStorage.getItem(USER_KEY);
    if (!savedUser) {
        return USER_INITIAL_STATE
    }

    try {
        return JSON.parse(savedUser)
        
    } catch (error) {
        console.log(error)
        return USER_INITIAL_STATE
    }

}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(getInitialState)

    useEffect(() => {
        try {
            localStorage.setItem(USER_KEY, JSON.stringify(user))
        } catch (error) {

        }
    }, [user])


    const isUserUndefined = () =>{
        return user.name === ''

    }


    const updateUser = (userName, userEmail, userPhone) => {
        setUser((prev) =>({
            ...prev, name: userName,
            email: userEmail,
            phone: userPhone
        }))

    }

  


  


  

    return (
        <UserContext.Provider value={{user, updateUser, isUserUndefined}}>
            {children}
        </UserContext.Provider>
    )
}