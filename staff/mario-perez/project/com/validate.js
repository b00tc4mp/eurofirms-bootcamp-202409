import errors from './errors.js'

const { ValidationError, NotFoundError } = errors

const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('El nombre no es válido')
        if (name.length < 2) throw new ValidationError('El nombre es demasiado corto')
    },
    email(email) {
        if (typeof email !== 'string') throw new Error('El email no es válido')
        if (email.length < 6) throw new ValidationError('Email demasiado corto')

        if (!email.includes('@')) throw new Error('El email tiene que tener una @')
        if (!email.includes('.')) throw new Error('Email debe contener un punto')

        var indexOfAt = email.indexOf('@')
        var indexOfDot = email.indexOf('.')
        if (indexOfDot < indexOfAt) throw new Error('Email incorrecto')

    },

    username(username) {
        if (typeof username !== 'string') throw new Error('Usuario no válido')
        if (username.length < 4) throw new Error('El nombre de usuario debe tener al menos 4 caracteres')
    },

    password(password) {
        if (typeof password !== 'string') throw new Error('Contraseña no válida')
        if (password.length < 8) throw new Error('La contraseña debe tener por lo menos 8 caracteres')
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError(' userId inválido')
        if (userId.length !== 24) throw new ValidationError("longitud del userId inválida")
    },

    level(level) {
        if (typeof level !== 'number') throw new ValidationError(' Nivel inválido')
    },

    space(space) {
        if (typeof space !== 'string') throw new ValidationError(' Plaza de parking inválida')
    },

    checkinAndCheckout(checkin, checkout) {
        if (typeof checkin !== 'string') throw new ValidationError(' checkin inválido')
        if (typeof checkout !== 'string') throw new ValidationError(' checkout inválido')
        if (checkin.length === 0) throw new ValidationError('No existe tiempo de llegada')
        if (checkout.length === 0) throw new ValidationError('No existe tiempo de salida')
        if (checkout < checkin) throw new ValidationError('La hora de salida debe ser posterior a la hora de llegada')
    },

    placeId(placeId) {
        if (typeof placeId !== 'string') throw new ValidationError(' placeId inválido')
        if (placeId.length !== 24) throw new ValidationError("longitud del placeId inválida")
    },

    vehicleRegistration(vehicleRegistration) {
        if (typeof vehicleRegistration !== 'string') throw new ValidationError('Matrícula no válida')
        if (vehicleRegistration.length !== 8) throw new ValidationError('Longitud de matrícula tiene que ser de 8')

        if (!vehicleRegistration.includes('-')) throw new ValidationError('Matrícula sin guión')
        // TODO más validaciones
    },

    parkingId(parkingId) {
        if (typeof parkingId !== 'string') throw new ValidationError(' placeId inválido')
        if (parkingId.length !== 24) throw new ValidationError("longitud del placeId inválida")
    },

}

export default validate