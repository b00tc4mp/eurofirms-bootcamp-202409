import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getUser from '../logic/getUser'
import getMessages from '../logic/getMessages'

function GetMessages(props) {
    console.log('GetMessages rendering')

    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [messages, setMessages] = useState([])

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof ValidationError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)
    }

    useEffect(() => {
        getUser()
            .then(user => {
                setUser(user)
                return getUserName()
            })
            .then(name => setName(name))
            .catch(error => handleError(error))
    }, [])

    console.log('Get Messages -> state: user = ' + name)
    console.log('user data -> ', user)

    useEffect(() => {
        if (user && user?.id) {
            console.log('User ID:', user.id)
            getMessages()
                .then(messages => {
                    console.log('Messages from API ->', messages)
                    setMessages(messages)

                })
                .catch(error => handleError(error))
        }
    }, [user])

    useEffect(() => {
        console.log('Messages downloaded -> ', messages)
    }, [messages])

    const handleOnCancelClick = () => props.onCancelClick()

    const messageIn = messages.some(message => message.recipient.id === user?.id)
    const messageOut = messages.some(message => message.sender.id === user?.id)
    const messageOwn = messages.some(message => message.sender.id === user?.id || message.recipient.id === user?.id)

    return <>
        <header className="w-full bg-emerald-200 flex justify-between items-center px-2 h-24 z-10">
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

        <div>
            <h2 className="text-l py-4 tracking-tight text-gray-900 flex justify-center">Your messages</h2>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {messageOwn ? (
                    messages.map(message => {
                        return (
                            <article
                                key={message.id}
                                message={message}
                                recipient={message.recipient.username}
                                content={message.content}
                            >
                                <Item
                                    itemId={message.item}
                                />
                                { /* onDeleted={handleOnDeleted}*/}
                            </article>
                        )
                    })

                ) : (<p>No Messages found</p>)
                }
            </section >
        </div>
    </>
}

export default GetMessages