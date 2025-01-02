const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name')
        if (name.length < 1) throw new ValidationError('invalid name length')
    },

    email(email) {
        if (typeof email !== 'string') throw new Error('invalid email')
        if (email.length < 6) throw new Error('invalid email length')
        if (!email.includes('@')) throw new Error('invalid email format')
        if (!email.includes('.')) throw new Error('invalid email format')
        const indexOfAt = email.indexOf('@')
        const indexOfDot = email.indexOf('.')
        if (indexOfDot < indexOfAt) throw new Error('invalid email format')
        // TODO add more rules for email validation (position of @ and .)
    },

    username(username) {
        if (typeof username !== 'string') throw new Error('invalid username')
        if (username.length < 4) throw new Error('invalid username length')
    },

    password(password) {
        if (typeof password !== 'string') throw new Error('invalid password')
        if (password.length < 8) throw new Error('invalid password length')
    },

    userId(userId) {
        if (typeof userId !== 'string') throw new Error('invalid userId'
    },

    image(image) {
        if (typeof image !== 'string') throw new Error('invalid image')
    },

    text(text) {
        if (typeof text !== 'string') throw new Error('invalid text')
    },

    postId(postId) {
        if (typeof postId !== 'string') throw new Error('invalid postId')
    },

    targetUserId(targetUserId) {
        if (typeof targetUserId !== 'string') throw new Error('invalid targetUserId')
    }
}

export default validate