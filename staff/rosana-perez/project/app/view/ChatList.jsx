import { errors, util } from 'com'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { useState, useEffect } from 'react'

import Chat from '../components/Chat'
import ChatItemSold from '../components/ChatItemSold'

import logic from '../logic/index.js'


function ChatList(props) {
    console.log('ChatList rendering')

    const [userId, setUserId] = useState(null)
    const [chats, setChats] = useState([])
    const [isChatBlocked, setIsChatBlocked] = useState(false)

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof ValidationError)
            alert(error.message)
        else if (error instanceof OwnershipError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)
    }
    useEffect(() => {
        const loggedUserId = logic.getLoggedInUserId()
        if (loggedUserId) {
            setUserId(loggedUserId)
        }
    }, [])

    useEffect(() => {
        if (userId) {
            logic.getChats() // returns lastMessage
                .then(chats => { setChats(chats) })
                .catch(error => handleError(error))
        }
    }, [userId])

    const { user } = props
    const userName = user?.name

    console.log('ChatList -> state: user = ' + userName)

    const handleOnChatClick = (chatId) => {
        if (!isChatBlocked) {

            props.onChatMessages(chatId)
        }
    }

    const handleOnItemSold = () => {
        setIsChatBlocked(true)
    }

    const lastChatMessage = chats?.map(chat => chat.lastMessage)
    const lastMessageDate = util.formatIsoDate(lastChatMessage?.updatedAt)



    return (
        <>
            <main className="text-center w-full   p-2 max-w-lg">
                <h2 className=" font-semibold flex justify-center text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your chat list</h2>
                <div className="flex justify-center">
                    <div>
                        {chats?.map(chat => {

                            const receiverUser = chat?.users.find(user => user.id !== userId)
                            const itemSold = chat?.item?.sold //item.sold[true]

                            return (
                                chat?.item && (
                                    !itemSold ? ( //item.sold[false]
                                        <div key={chat.id} onClick={() => { chat.item && handleOnChatClick(chat.id) }}>
                                            <Chat
                                                chatId={chat.id}
                                                image={chat.item.image}
                                                title={chat.item.title}
                                                user={receiverUser.username}
                                                message={lastChatMessage}
                                                date={lastMessageDate}
                                            />
                                        </div>
                                    ) : ( //item.sold[true]
                                        <div onClick={handleOnItemSold}>
                                            <ChatItemSold
                                                chatId={chat.id}
                                                image={chat.item.image}
                                                title={chat.item.title}
                                                user={receiverUser.username}
                                                message={lastChatMessage}
                                                date={lastMessageDate}
                                            />
                                            <p className="mt-1 text-sm font-medium opacity-50">Item not available</p>
                                        </div>
                                    )
                                )
                            )
                        })}
                        {!chats?.length && <p>No chats found</p>}
                    </div >
                </div>
            </main>
        </>
    )
}

export default ChatList