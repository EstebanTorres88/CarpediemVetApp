export const validateUserData = (username, useremail, userphone) => {

  const validation = {
    modalTitle: "",
    isSuccesful: false
  }



  const phoneRegex = /^[0-9]{8}$/
  const emailRegex = /^\w+\@[a-zA-Z]+\.[a-z]{2,6}$/



  if (username.length === 0 || useremail.length === 0 || userphone.length === 0) {
    validation.modalTitle = 'Debes llenar todos los campos solicitados'
    return validation


  }

  if (!phoneRegex.test(userphone)) {
    validation.modalTitle = 'El número de teléfono debe tener solamente números y debe contener 8 caracteres'
    return validation



  }


  if (username.length < 3) {
    validation.modalTitle = 'Verifica el nombre ingresado, es muy corto'
    return validation

  }


  if (!emailRegex.test(useremail)) {
    validation.modalTitle = 'Por favor, ingresa un correo válido ejemplo: usuario@dominio.com'
    return validation

  }



  validation.modalTitle = 'Tus cambios han sido guardados exitosamente'
  validation.isSuccesful = true



  return validation

}



