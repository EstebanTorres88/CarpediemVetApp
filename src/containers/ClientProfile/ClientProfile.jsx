import React, { useState } from 'react'
import { User, Mail, Phone, CheckCircle, XCircle } from 'lucide-react'

import { InputForm, ConfirmationModal } from '../../components'
import { useUserContext } from '../../context/UserContext/UseUserContext'
import { validateUserData } from '../../utils'

import './ClientProfile.css'



export const ClientProfile = () => {

  const { user, updateUser } = useUserContext()

  const [showModal, setShowModal] = useState(false)
  const [isSuccesful, setIsSuccesful] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [modalTitle, setModalTitle] = useState('')
  const [formData, setFormData] = useState({

    username: user.name,
    useremail: user.email,
    userphone: user.phone

  })







  const handleEdit = () => setIsDisabled(false)
  const handleClose = () => setShowModal(false)
  const isFormUnchanged = () => formData.username === user.name && formData.useremail === user.email && formData.userphone === user.phone


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = formData.username.trim()
    const email = formData.useremail.trim()
    const phone = formData.userphone.trim()


    const validation = validateUserData(name, email, phone)

    if (!validation.isSuccesful) {
      setShowModal(true)
      setModalTitle(validation.modalTitle)
      setIsSuccesful(validation.isSuccesful)
      setIsDisabled(false)
      return
    }

    updateUser(name, email, phone)

    setShowModal(true)
    setIsDisabled(true)
    setModalTitle(validation.modalTitle)
    setIsSuccesful(validation.isSuccesful)

  }








  return (


    <div className="client-profile-card">




      <h2 className='client-profile-card__title'>Editar Perfil</h2>

      <form className='client-profile-card__form' onSubmit={handleSubmit}>



        <InputForm Icon={User} inputName={'username'} value={formData.username} placeholder={'Escribe tu nombre'} onChange={handleChange} disabled={isDisabled}></InputForm>

        <InputForm Icon={Mail} inputName={'useremail'} value={formData.useremail} placeholder={'tunombre@ejemplo.com'} onChange={handleChange} disabled={isDisabled}></InputForm>

        <InputForm Icon={Phone} inputName={'userphone'} value={formData.userphone} placeholder={'Tu numero de teléfono'} onChange={handleChange} disabled={isDisabled}></InputForm>




        {isDisabled && (<button type='button' className='client-profile-card__form__button client-profile-card__form__edit-button' onClick={handleEdit}>Editar</button>)}



        {!isDisabled && (<button type='submit' className={`client-profile-card__form__button ${isFormUnchanged() ? 'client-profile__form__disabled-button' : 'client-profile__form__enabled-button'}`} disabled={isFormUnchanged()}  >Guardar Cambios</button>)}






      </form>



      {isSuccesful && <ConfirmationModal isOpen={showModal} onCloseMethod={handleClose} label={modalTitle} Icon={CheckCircle} buttonLabel={'Ok'}></ConfirmationModal>}
      {!isSuccesful && <ConfirmationModal isOpen={showModal} onCloseMethod={handleClose} label={modalTitle} Icon={XCircle} buttonLabel={'Volver a Intentarlo'}></ConfirmationModal>}





    </div>
  )
}
