

export const dateFormatter = (dateString) => {
    const localDate = new Date(dateString)

    return localDate.toLocaleDateString('es-CR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

}

