import { User, Chat } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function getChat(userId, chatId) {
    validate.userId(userId)
    validate.chatId(chatId)

    return Promise.all([
        User.findById(userId).lean(),
        Chat.findById(chatId)
            .select('-__v')
            .populate({
                path: 'users',
                select: 'username _id'
            })
            .populate('item', 'image title sold')
            .populate({
                path: 'messages.user',
                select: 'username _id'
            })
            .lean()
    ])
        .then(userAndChat => {
            const [user, chat] = userAndChat

            if (!user) throw new NotFoundError('user not found')
            if (!chat) throw new NotFoundError('chat not found')

            const userInsideChat = chat.users.some(user => user._id.toString() === userId)

            if (!userInsideChat) throw new OwnershipError('user is not participant in chat')

            if (chat._id) {
                chat.id = chat._id.toString()
                delete chat._id
            }
            if (chat.users) {
                chat.users.forEach(user => {
                    if (user._id) {
                        user.id = user._id.toString()
                        delete user._id
                    }
                })
            }
            if (chat.item._id) {
                chat.item.id = chat.item._id.toString()
                delete chat.item._id
            }

            const { messages } = chat

            if (messages) {
                messages.forEach(message => {
                    message.id = message._id.toString()
                    delete message._id

                    if (message.user._id) {
                        message.user.id = message.user._id.toString()
                        delete message.user._id
                    }
                })
            }
            return chat
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default getChat