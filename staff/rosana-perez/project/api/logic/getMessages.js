import { User, Message } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getMessages(userId) {
    validate.userId(userId)



    return Promise.all([
        User.findById(userId).lean(),
        Message.find({}, '-__v').populate('sender', '_id')
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndMessages => {

            const [user, messages] = userAndMessages

            if (!user) throw new NotFoundError('user not found')

            messages.forEach(message => {
                message.id = message._id.toString()
                delete message._id

                if (message.sender && message.sender._id) {
                    message.sender.id = message.sender._id.toString()
                    delete message.sender._id
                }

                message.own = message.sender?.id === userId.toString()

            })

            return messages
        })
}

export default getMessages