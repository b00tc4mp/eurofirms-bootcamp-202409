import { User, Chat } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getChats(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Chat.find({ users: userId })
            .select('-__v')
            .populate({
                path: 'users',
                select: 'username'
            })
            .populate('item', 'image title type sold')
            .populate({
                path: 'messages.user',
                select: 'username'
            })
            .lean()
    ])
        .then(userAndChats => {

            const [user, chats] = userAndChats

            if (!user) throw new NotFoundError('user not found')

            chats.forEach(chat => {
                if (chat._id) {
                    chat.id = chat._id.toString();
                    delete chat._id;
                }
                if (chat.users) {
                    chat.users.forEach(user => {
                        if (user._id) {
                            user.id = user._id.toString()
                            delete user._id
                        }
                    })
                }
                if (chat.item) {
                    if (chat.item._id) {
                        chat.item.id = chat.item._id.toString()
                        delete chat.item._id
                    }
                }
                if (chat.messages) {
                    chat.lastMessage = chat.messages.at(-1)
                    delete chat.messages
                }
                if (chat.lastMessage._id) {
                    chat.lastMessage.id = chat.lastMessage._id.toString()
                    delete chat.lastMessage._id
                }
                if (chat.lastMessage.user._id) {
                    chat.lastMessage.user.id = chat.lastMessage.user._id.toString()
                    delete chat.lastMessage.user._id
                }
            })
            return chats
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default getChats