import { errors, util } from 'com'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Chat from '../components/Chat'
import ChatItemSold from '../components/ChatItemSold'

import getLoggedInUserId from '../logic/getLogggedInUserId'
import getUserName from '../logic/getUserName'
import getChats from '../logic/getChats'


function ChatList(props) {
    console.log('ChatList rendering')

    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)
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
        const loggedUserId = getLoggedInUserId()
        if (loggedUserId) {
            setUserId(loggedUserId)
        }
        getUserName()
            .then(userName => { setUserName(userName) })
            .catch(error => handleError(error))
    }, [])

    useEffect(() => {
        if (userId) {
            getChats() // returns lastMessage
                .then(chats => { setChats(chats) })
                .catch(error => handleError(error))
        }
    }, [userId])

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

    const handleOnCancelClick = () => props.onCancelClick()

    return (
        <>
            <header className="w-full flex justify-between items-center px-2 h-24 z-10">
                <div className="flex lg:flex-1">
                    <a href="#" className="m-1.5 p-1.5">
                        <span className="sr-only">Dona2</span>
                        <img
                            alt=""
                            src="/images/greenWorld.png"
                            className="h-12 w-auto"
                        />
                        <p className="px-3 py-2.5 flex justify-center font-semibold text-emerald-700">Dona2</p>
                    </a>
                </div>
                <section className="flex justify-start">
                    {userId ? <h3 className="font-semibold text-gray-500 text-sm  gap-2">{userName}</h3> : null}
                </section>

                <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                    <ArrowUturnLeftIcon />
                </Button>
            </header>
            <main className="text-center w-full   p-2 max-w-lg">
                <h2 className=" font-semibold flex justify-center text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your chat list</h2>
                <div className="flex justify-center">
                    <div>
                        {chats?.map(chat => {

                            const receiverUser = chat?.users.find(user => user.id !== getLoggedInUserId())
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