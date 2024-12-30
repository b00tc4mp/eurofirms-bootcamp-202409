import { User, Message } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getMessagesIn(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Message.find({ recipient: userId })
            .select('-__v')
            .populate('sender', 'username id')
            .populate('recipient', 'username id')
            .populate('item', 'id image title')
            .lean()
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
                if (message.recipient && message.recipient._id) {
                    message.recipient.id = message.recipient._id.toString()
                    delete message.recipient._id
                }
                if (message.item && message.item._id) {
                    message.item.id = message.item._id.toString()
                    delete message.item._id

                }
            })
            return messages
        })
}

export default getMessagesIn