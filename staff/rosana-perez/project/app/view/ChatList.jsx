import { errors, util } from 'com'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Chat from './Chat'

import getLoggedInUserId from '../logic/getLogggedInUserId'
import getUserName from '../logic/getUserName'
import getChats from '../logic/getChats'


function ChatList(props) {
    console.log('ChatList rendering')

    const [userId, setUserId] = useState(null)
    const [name, setName] = useState(null)
    const [chats, setChats] = useState([])

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
            .then(name => { setName(name) })
            .catch(error => handleError(error))
    }, [])

    useEffect(() => {
        if (userId) {
            getChats() // retorna lastMessage
                .then(chats => { setChats(chats) })
                .catch(error => handleError(error))
        }
    }, [userId])

    console.log('chats', chats)
    console.log('ChatList -> state: user = ' + name)

    const handleOnChatClick = (chatId) => {
        props.onChatMessages(chatId)
    }


    const lastChatMessage = chats?.map(chat => chat.lastMessage)
    console.log('lastMessage', lastChatMessage)
    const lastMessageDate = util.formatIsoDate(lastChatMessage?.updatedAt)

    const handleOnCancelClick = () => props.onCancelClick()

    /* const handleOnSent = () => {
        getMessagesIn()
            .catch(error => { console.error(error) })
            .then(() => {
                if (messageIn) { messageIn.push(messageIn) }
                else if (messageOut) { messageOut.push(messageOut) }
            })
    } */


    return <>
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
            {userId ? <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{name}</h3> : null}
            <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                <ArrowUturnLeftIcon />
            </Button>
        </header>

        <div className="flex w-full flex-col flex-items-center items-start gap-1 p-6">
            <h2 className="text-2xl font-semibold py-4 tracking-tight text-gray-900 ">Your chats</h2>
            <div>
                <div className="" >
                    {chats ? (
                        chats.map(chat => {
                            return (
                                <div key={chat.id} onClick={() => handleOnChatClick(chat.id)}>
                                    <Chat
                                        chatId={chat.id}
                                        message={lastChatMessage}
                                        date={lastMessageDate}
                                    >
                                        {/*                                        onMessage={handleOnSent} />
                                        {/* onDeleted={handleOnDeleted}*/}
                                    </Chat>
                                </div>
                            )
                        })
                    ) : (<p>No chats found</p>)
                    }
                </div >
            </div>
        </div>
    </>
}

export default ChatList