import React, { useState } from 'react'
import vetLogo from '../../assets/logo.png'
import { Mail, User, Phone, XCircle } from 'lucide-react'

import { useUserContext } from '../../context/UserContext/UseUserContext'
import { validateUserData } from '../../utils'
import { useNavigate } from 'react-router-dom'

import { InputForm, ConfirmationModal } from '../../components'
import './LoginModal.css'


export const LoginModal = () => {

    const { updateUser } = useUserContext()
    const navigate = useNavigate()

    const [modalTitle, setModalTitle] = useState('')
    const [isSuccesful, setIsSuccesful] = useState(false)
    const [showModal, setShowModal] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: e.target.username.value.trim(),
            email: e.target.useremail.value.trim(),
            phone: e.target.userphone.value.trim()
        }


        const validation = validateUserData(formData.name, formData.email, formData.phone)

        if (!validation.isSuccesful) {
            setShowModal(true)
            setModalTitle(validation.modalTitle)
            setIsSuccesful(validation.isSuccesful)
            return
        }

        updateUser(formData.name, formData.email, formData.phone)
        setShowModal(true)
        setIsSuccesful(validation.isSuccesful)

        navigate('/')

    }



    const handleClose = () => setShowModal(false)



    return (
        <div className='login-card'>

            <div className="login-card__header">
                <h3 className='login-card__title'>CARPEDIEM VET</h3>
                <img src={vetLogo} alt="vetLogo" className='login-card__logo' />




            </div>


            <p className='login-card__message'>¡Ingresa tus datos para continuar!</p>



            <form className='login-card__form' onSubmit={handleSubmit}>



                <InputForm Icon={User} inputName={'username'} placeholder={'Escribe tu nombre'}></InputForm>

                <InputForm Icon={Mail} inputName={'useremail'} placeholder={'tunombre@ejemplo.com'}></InputForm>

                <InputForm Icon={Phone} inputName={'userphone'} placeholder={'Tu numero de teléfono'}></InputForm>

                <button type='submit' className='login-card__button'>Continuar</button>


            </form>



            {!isSuccesful && <ConfirmationModal isOpen={showModal} onCloseMethod={handleClose} label={modalTitle} Icon={XCircle} buttonLabel={'Volver a Intentarlo'}></ConfirmationModal>}



        </div>
    )
}