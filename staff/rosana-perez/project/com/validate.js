import errors from './errors.js'

const { ValidationError } = errors

const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name')
        if (name.length < 1) throw new ValidationError('invalid name length')
    },

    /*  location(location) {
         if (typeof location !== 'string') throw new ValidationError('invalid location')
         if (location.length < 3) throw new ValidationError('invalid location length')
     }, */

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
        if (userId.length < 24) throw new ValidationError('invalid userId length')
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image')
    },

    text(text) {
        if (typeof text !== 'string') throw new ValidationError('invalid text')
        if (text.includes('')) throw new ValidationError("text is needed")
    },

    title(title) {
        if (typeof title !== 'string') throw new ValidationError('invalid title')
    },

    itemId(itemId) {
        if (typeof itemId !== 'string') throw new ValidationError('invalid itemId')
        /* if (itemId.length < 24) throw new ValidationError('invalid itemId length') */
    },

    targetUserId(targetUserId) {
        if (typeof targetUserId !== 'string') throw new ValidationError('invalid targetUserId')
        if (targetUserId.length < 24) throw new ValidationError('invalid targetUserId length')
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description')
    },

    type(type) {
        if (typeof type !== 'string') throw new ValidationError('invalid type')
    },

    chatId(chatId) {
        if (typeof chatId !== 'string') throw new ValidationError('invalid chatId')

        let idIsBlank = true

        for (let i = 0; i < chatId.length && idIsBlank; i++) {
            const char = chatId[i]

            if (char !== ' ')
                idIsBlank = false
        }
        if (idIsBlank)
            throw new ValidationError("chatId can't be all blank characters")

        if (chatId.length < 24) throw new ValidationError('invalid chatId length')

        /*  if (chatId.includes('')) throw new ValidationError("chatId can't include blank characters") */
    },

    content(content) {
        if (typeof content !== 'string') throw new ValidationError('invalid content')
        if (content.length === 0) throw new ValidationError('invalid content length')
    },

    owner(owner) {
        if (typeof owner !== 'string') throw new ValidationError('invalid owner')
    },

    sold(sold) {
        if (typeof sold !== 'boolean') throw new ValidationError('invalid sold value')
    }

}

export default validate