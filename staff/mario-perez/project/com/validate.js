import errors from './errors.js'

const { ValidationError } = errors

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
}

export default validate