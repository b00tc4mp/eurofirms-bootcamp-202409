import { errors, util } from 'com'
import '../style.css'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { Button } from '../components/button'
import { Field, Label } from '../components/fieldset.jsx'
import { Input } from '../components/input'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

import Message from './Message'

import getUserName from '../logic/getUserName'
import getChat from '../logic/getChat'
import sendMessage from '../logic/sendMessage'

function ChatMessages(props) {
    console.log('ChatMessages rendering')

    const [name, setName] = useState(null)
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState(null)

    const [timestamp, setTimeStamp] = useState(Date.now())

    const chatId = props.chatId
    const itemId = props.itemId

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
        getUserName()
            .then(name => { setName(name) })
            .catch(error => handleError(error))
    }, [])

    useEffect(() => {
        if (chatId) {
            getChat(chatId)
                .then(chat => setChat(chat))
                .catch(error => handleError(error))
        }
    }, [chatId])

    useEffect(() => {
        setTimeout(() => {
            setTimeStamp(Date.now())
        }, 5000)

    }, [timestamp])

    console.log('ChatMessages -> state: user = ' + name)

    const handleOnCancelClick = () => props.onCancelClick()

    const handleOnMessage = event => {
        event.preventDefault()

        const form = event.target

        const content = form.content.value

        if (content) {
            sendMessage(content, chatId, itemId)
                .then((newMessage) => {
                    setMessage(newMessage)

                    props.onMessage()
                })
                .catch(error => { console.error(error) })
        }
    }

    const handleOnSent = () => {
        getChat(chatId)
            .then(message => setMessage(message))
            .catch(error => handleError(error))
    }

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
                {name ? <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{name}</h3> : null}
                <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                    <ArrowUturnLeftIcon />
                </Button>
            </header>

            <div className="flex w-full flex-col items-start gap-1 p-6">
                <div>
                    <h2 className="text-2xl font-semibold py-4 tracking-tight text-gray-900">Chat</h2>

                    {chat?.item &&
                        <div className="group/f0df7a36 flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-2xl px-3 py-3 hover:bg-neutral-50 active:bg-neutral-100">
                            <div className="group/bec25ae6 bg-orange-100 relative flex h-12 w-12 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg">
                                <img className="absolute h-12 w-12 flex-none object-cover" src={chat.item.image} alt="chat item" />
                            </div>

                            <div className="flex flex-col gap-2 justify-center">
                                <span className="font-semibold text-lg tracking-tight">{chat.item.title}</span>
                            </div>
                        </div>
                    }
                </div>
                <div className="messages-container mt-4 pb-12">
                    {chat?.messages ? (
                        chat.messages.map(message => (
                            <Message
                                key={message.id}
                                from={message.user.username}
                                content={message.content}
                                date={util.formatIsoDate(message.updatedAt)}
                                senderId={message.user.id}
                                onMessage={handleOnSent}
                            />
                        ))
                    ) : (
                        <p>No messages found</p>
                    )}
                    <form className="flex justify-between items-center w-full" onSubmit={handleOnMessage}>
                        <div className="flex-grow">
                            <Field>
                                <Label htmlFor="text" name="content" ></Label>
                                <Input type="text" id="content" placeholder="Write a message:" className="w-full text-xs flex justify-start"></Input>
                            </Field>
                        </div>
                        <Button
                            type="submit"
                            plain
                            className="flex justify-end ml-2"
                            color="white">
                            <PaperAirplaneIcon />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatMessages