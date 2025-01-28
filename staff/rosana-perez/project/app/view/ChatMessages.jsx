import { errors, util } from 'com'
import '../style.css'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { Button } from '../components/button'
import { Field, Label } from '../components/fieldset.jsx'
import { Input } from '../components/input'

import { useState, useEffect } from 'react'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

import Message from '../components/Message'

import logic from '../logic/index.js'

function ChatMessages(props) {
    console.log('ChatMessages rendering')

    const [chat, setChat] = useState([])

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
        if (chatId) {
            logic.getChat(chatId)
                .then(chat => setChat(chat))
                .catch(error => handleError(error))
        }
    }, [timestamp])

    useEffect(() => {
        setTimeout(() => {
            setTimeStamp(Date.now())
        }, 5000)

    }, [timestamp])

    const handleOnMessage = event => {
        event.preventDefault()

        const form = event.target

        const content = form.content.value

        if (content) {
            logic.sendMessage(content, chatId, itemId)
                .then(() => {
                    setTimeStamp(Date.now())
                    form.reset()
                })
                .catch(error => { console.error(error) })
        }
    }


    return (
        <>
            <main className="flex flex-col items-center justify-center">
                <div className="text-center w-full p-2 max-w-lg">
                    <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Chat</h2>
                    <div className="flex w-full flex-col items-center gap-1 p-6">
                        {chat?.item &&
                            <div className="group/f0df7a36 w-full flex justify-center cursor-pointer items-center gap-4 overflow-hidden rounded-2xl px-3 py-3 hover:bg-neutral-50 active:bg-neutral-100">
                                <div className="group/bec25ae6 bg-orange-100 relative flex h-12 w-12 flex-col gap-2 overflow-hidden rounded-lg">
                                    <img className="absolute h-12 w-12 flex-none object-cover" src={chat.item.image} alt="chat item" />
                                </div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <span className="font-semibold text-lg  tracking-tight">{chat.item.title}</span>
                                </div>
                            </div>
                        }
                        <div className="messages-container mt-4 pb-12 w-full">
                            {chat?.messages ? (
                                chat.messages.map(message => (
                                    <Message
                                        key={message.id}
                                        from={message.user.username}
                                        content={message.content}
                                        date={util.formatIsoDate(message.updatedAt)}
                                        senderId={message.user.id}
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
                </div>
            </main>
        </>
    )
}

export default ChatMessages