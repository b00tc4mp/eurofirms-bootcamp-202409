import { User, Item, Message, Chat } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function sendMessage(userId, itemId, content) {
    validate.userId(userId)
    validate.itemId(itemId)
    validate.content(content)

    return Promise.all([
        User.findById(userId),
        Item.findById(itemId).populate('_id'),
        Chat.findOne({ item: itemId, users: userId })
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(([user, item, chat]) => {
            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            const message = new Message({
                user: user._id,
                item: item._id,
                content
            })

            if (!chat)
                return Chat.create({ users: [userId, item.author], item: itemId, messages: [message] })

            chat.messages.push(message)

            return chat.save()
        })
        .then(() => { })
}

export default sendMessage

