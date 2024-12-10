import errors from './errors.js'

const { ValidationError } = errors

const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name')
        if (name.length < 1) throw new ValidationError('invalid name length')
    },

    location(location) {
        if (typeof location !== 'string') throw new ValidationError('invalid location')
        if (location.length < 3) throw new ValidationError('invalid location length')
    },

    email(email) {
        if (typeof email !== 'string') throw new ValidationError('invalid email')
        if (email.length < 6) throw new ValidationError('invalid email length')
        if (!email.includes('@')) throw new ValidationError('invalid email format')
        if (!email.includes('.')) throw new ValidationError('invalid email format')

        const indexOfAt = email.indexOf('@')
        const indexOfDot = email.indexOf('.')
        if (indexOfDot < indexOfAt) throw new ValidationError('invalid email format')
    },

    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username')
        if (username.length < 4) throw new ValidationError('invalid username length')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('invalid password')
        if (password.length < 8) throw new ValidationError('invalid password length')
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError('invalid userId')
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image')
    },

    text(text) {
        if (typeof text !== 'string') throw new ValidationError('invalid text')
    },

    itemId(itemId) {
        if (typeof itemId !== 'string') throw new ValidationError('invalid itemId')
    },

    targetUserId(targetUserId) {
        if (typeof targetUserId !== 'string') throw new ValidationError('invalid targetUserId')
    },

    description(descriptionItem) {
        if (typeof descriptionItem !== 'string') throw new ValidationError('invalid description')
    }
}

export default validate