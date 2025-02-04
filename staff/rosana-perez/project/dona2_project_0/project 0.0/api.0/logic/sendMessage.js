import { User, Message, Chat, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function sendMessage(userId, content, chatId, itemId) {
    validate.userId(userId)
    validate.content(content)

    if (chatId) {
        validate.chatId(chatId)

        return Promise.all([
            User.findById(userId)
                .populate('username _id')
                .select('-__v').lean(),
            Chat.findById(chatId)
                .select('-__v')
                .populate({
                    path: 'users',
                    select: 'username'
                })
                .populate({
                    path: 'messages.user',
                    select: 'username'
                })
        ])
            .catch(error => { throw new SystemError(error.message) })
            .then(([user, chat]) => {

                if (!user) throw new NotFoundError('user not found')

                const message = new Message({
                    user: user._id,
                    content
                })

                const userInsideChat = chat.users.some(chatUser => chatUser._id.toString() === userId.toString())

                if (!userInsideChat) {
                    throw new NotFoundError('User not participant')
                }

                chat.messages.push(message)

                return chat.save()
            })
    }
    if (!chatId && itemId) {
        validate.itemId(itemId)

        return Promise.all([
            User.findById(userId)
                .populate('username _id')
                .select('-__v').lean(),
            Item.findById(itemId)
                .select('-__v')
                .populate({
                    path: 'author',
                    select: 'username'
                })
        ])
            .catch(error => { throw new SystemError(error.message) })
            .then(([user, item]) => {
                if (!user) throw new NotFoundError('user not found')

                const message = new Message({
                    user: user._id,
                    content
                })
                return Chat.create({ users: [user._id, item?.author._id], item: item._id, messages: [message] })
            })
            .then(() => { })
    }

    if (!itemId) throw new NotFoundError('itemId is required')
}

export default sendMessage

