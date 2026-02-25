import React, { useState } from 'react'
import { useUserContext } from '../../context/UserContext/UseUserContext'
import { User, Mail, Phone, CheckCircle, XCircle } from 'lucide-react'
import { InputForm, ConfirmationModal } from '../../components'
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
  const handleConfirmation = () => setShowModal(false)
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

    const phoneRegex = /^[0-9]{8}$/
    const emailRegex = /^\w+\@[a-zA-Z]+\.[a-z]{2,6}$/

    if (name.length === 0 || email.length === 0 || phone.length === 0) {
      setModalTitle('Debes llenar todos los campos solicitados')
      setShowModal(true)
      setIsSuccesful(false)
      return


    }

    if (!phoneRegex.test(phone)) {
      setModalTitle('El número de teléfono debe tener solamente números y debe contener 8 caracteres')
      setShowModal(true)
      setIsSuccesful(false)
      return


    }


    if (name.length < 3) {
      setModalTitle('Verifica el nombre ingresado, es muy corto')
      setShowModal(true)
      setIsSuccesful(false)
      return
    }


    if (!emailRegex.test(email)) {
      setModalTitle('Por favor, ingresa un correo válido ejemplo: usuario@dominio.com')
      setShowModal(true)
      setIsSuccesful(false)
      return
    }



    updateUser(formData.username, formData.useremail, formData.userphone)
    setIsDisabled(true)
    setShowModal(true)
    setIsSuccesful(true)

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



        {isSuccesful && <ConfirmationModal isOpen={showModal} onCloseMethod={handleConfirmation} label={'Tus cambios han sido guardados exitosamente'} Icon={CheckCircle} buttonLabel={'Ok'}></ConfirmationModal>}
        {!isSuccesful && <ConfirmationModal isOpen={showModal} onCloseMethod={handleConfirmation} label={modalTitle} Icon={XCircle} buttonLabel={'Volver a Intentarlo'}></ConfirmationModal>}





      </div>
      )
}
