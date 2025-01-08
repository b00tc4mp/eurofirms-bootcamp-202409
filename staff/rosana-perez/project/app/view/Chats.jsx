import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Chat from './Chat'
import Item from './Item'

import getLoggedInUserId from '../logic/getLogggedInUserId'
import getUserName from '../logic/getUserName'
import getChats from '../logic/getChats'


function Chats(props) {
    console.log('Chats rendering')

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
            getChats()
                .then(chats => { setChats(chats) })
                .catch(error => handleError(error))
        }
    }, [userId])


    console.log('Chats -> state: user = ' + name)

    const handleOnCancelClick = () => props.onCancelClick()

    const totalMssByChat = chats.forEach(chat => {
        chat.messages.length - 1
    })
    const totalMessages = totalMssByChat

    /*
        const handleOnSent = () => {
            getMessagesIn()
                .catch(error => { console.error(error) })
                .then(() => {
                    if (messageIn) { messageIn.push(messageIn) }
                    else if (messageOut) { messageOut.push(messageOut) }
                })
        }
     */

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

        <div className="container">
            <h2 className="text-l py-4 tracking-tight text-gray-900 flex justify-center">Your chats</h2>
            <div>
                <h3>Total Messages: {totalMessages}</h3>
                <div className="">
                    {chats ? (
                        chats.map(chat => {
                            return (
                                <div key={chat.id}>

                                    <Chat
                                        chatId={chat.id}>
                                        {/*                                        onMessage={handleOnSent} />
                                        {/* onDeleted={handleOnDeleted}*/}
                                    </Chat>
                                    <Item
                                        itemId={chat.item.id}
                                    />
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

export default Chats