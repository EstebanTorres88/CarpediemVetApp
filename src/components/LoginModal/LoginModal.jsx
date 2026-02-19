import React from 'react'
import vetLogo from '../../assets/logo.png'
import './LoginModal.css'
import { useUserContext } from '../../context/UserContext/UseUserContext'
import { Mail, User, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { InputForm } from '../InputForm/InputForm'

export const LoginModal = () => {

    const {updateUser} = useUserContext()

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name : e.target.username.value,
            email: e.target.useremail.value,
            phone: e.target.userphone.value
        }

        updateUser(formData.name, formData.email, formData.phone)

        navigate('/')

    }
    return (
        <div className='login-card'>

            <div className="login-card__header">
                <h3 className='login-card__title'>CARPEDIEM VET</h3>
                <img src={vetLogo} alt="vetLogo" className='login-card__logo' />




            </div>


            <p className='login-card__message'>¡Ingresa tus datos para continuar!</p>



            <form  className='login-card__form' onSubmit={ handleSubmit}>

               

                <InputForm Icon={User} inputName={'username'} placeholder={'Escribe tu nombre'}></InputForm>

                <InputForm Icon={Mail} inputName={'useremail'} placeholder={'tunombre@ejemplo.com'}></InputForm>

                <InputForm Icon={Phone} inputName={'userphone'} placeholder={'Tu numero de teléfono'}></InputForm>

                <button type='submit' className='login-card__button'>Continuar</button>

                
            </form>



        </div>
    )
}