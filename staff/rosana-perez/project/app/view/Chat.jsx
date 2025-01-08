import { errors, util } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import { Field, Label } from '../components/fieldset.jsx'
import { Button } from '../components/button.jsx'
import { ArrowUturnLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Textarea } from '../components/textarea.jsx'

import sendMessage from '../logic/sendMessage.js'
import getChat from '../logic/getChat.js'
import getLoggedInUserId from '../logic/getLogggedInUserId.js'

import Message from './Message'

import { useState, useEffect } from 'react'

function Chat({ chatId }) { //recibe chatId = props
    console.log('Chat rendering')

    const [chat, setChat] = useState(null)
    const [timestamp, setTimeStamp] = useState(Date.now())

    console.log('timeStamp->  ', timestamp)

    const handleError = (error) => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        } else if (error instanceof ValidationError) {
            alert(error.message)
        } else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        console.error(error)
    }


    useEffect(() => {
        console.log('fetchhingg chat info')
        getChat(chatId)
            .then(chat => setChat(chat))
            .catch(error => handleError(error))
    }, [timestamp])

    useEffect(() => {
        setTimeout(() => {
            setTimeStamp(Date.now())
        }, 5000)

    }, [timestamp])

    function toggleChat(state) {
        setChat(state)
    }

    const handleMessageSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const contentText = form.text
        const content = contentText.value

        /*  let recipientId = () => {
             if (messageIn) {
                 recipientId = messageIn.sender.id
             } else if (messageOut) {
                 recipientId = messageOut.recipient.id
             }
         }
     
         if (content && recipientId) {
             try {
                 sendMessage(itemId, recipientId, content)
                     .then(() => {
                         props.onMessage()
     
                         if (messageIn) { toggleMessageIn(false) }
                         else if (messageOut) {
                             toggleMessageOut(false)
                         }
                     })
                     .catch(error => handleError(error))
     
             } catch (error) { handleError(error) }
         } */
    }
    const recipientUser = chat?.users.find(user => user.id !== getLoggedInUserId())

    const lastMessage = chat?.messages[chat.messages.length - 1]

    return (
        <article >
            {chat &&
                <a href="#">
                    <p>{recipientUser.username}</p>
                    <section>
                        {lastMessage &&
                            <Message
                                from={lastMessage.user.id}
                                content={lastMessage.content}
                                date={lastMessage.updatedAt} />
                        }
                    </section>
                    {/* 
                    <form className="flex flex-col items-center" onSubmit={handleMessageSubmit}>
                        <Field>
                            <Label htmlFor="text" className="text-xs">Write a message:</Label>
                            <Textarea type="text" id="text"></Textarea>
                        </Field>

                        <div className="flex justify-between h-4 items-center my-6 m-2">
                            <Button
                                type="submit"
                                className="btn sm:w-auto justify-items-start"
                                plain
                                color="white">
                                Send
                            </Button>
                        </div>
                    </form> */}
                </a>
            }
        </article>
    )
}

export default Chat