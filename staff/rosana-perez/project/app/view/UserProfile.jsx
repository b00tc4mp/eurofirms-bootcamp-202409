import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon, PlusIcon } from '@heroicons/react/24/outline'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getItems from '../logic/getItems'
import getMessages from '../logic/getMessages'
import favItems from '../logic/favItems'


function UserProfile(props) {
    console.log('UserProfile rendering')

    const [user, setUser] = useState(null)

    const [items, setItems] = useState([])

    const [messages, setMessages] = useState([])

    const itemOwn = items.some(item => item.author.toString() === user?.id)

    const messagesOut = messages.some(message => message.sender.toString() === user?.id)
    // const messagesIn = messages.some(message => message.recipient.toString() === user?.id) TODO: logics in messages in, about the user's items

    const { item } = props
    const userFavs = user.some(user => user.favs.toString() === item?.id)

    useEffect(() => {
        try {
            getUserName()
                .then(user => {
                    setUser(user)

                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])

    console.log('User Profile -> state: user = ' + user.name)

    function loadAll() {

        if (user && itemOwn) {
            try {
                getItems()
                    .then(items => setItems(items))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('Sorry, there was a problem. Try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError) {
                    alert(error.message)
                } else {
                    alert('Sorry, there was a problem. Try again later.')
                }
                console.error(error)
            }
        }

        if (user && messagesOut) { //if (user && messagesOut || messagesIn) {
            try {
                getMessages()
                    .then(messages => setMessages(messages))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('Sorry, there was a problem. Try again later.')
                    })
                console.error(error)

            } catch (error) {
                if (error instanceof ValidationError) {
                    alert(error.message)
                } else {
                    alert('Sorry, there was a problem. Try again later.')
                }
                console.error(error)
            }
        }

        if (user && user.favs) {
            try {
                favItems()
                    .then(user => setUser(user.favs))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('Sorry, there was a problem. Try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError) {
                    alert(error.message)
                } else {
                    alert('Sorry, there was a problem. Try again later.')
                }
                console.error(error)
            }
        }
    }
    useEffect(() => {
        try {
            loadAll()
                .then((items, messages, user) => {
                    setItems(items)
                    setMessages(messages)
                    setUser(user.favs)
                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])

    const handleOnCancelClick = () => props.onCancelClick()
    const handleOnFavItemsClick = () => props.onFavItems()
    const handleOnEditProfileClick = () => loadAll() //TODO... not functional


    return <>
        <header className="w-full bg-emerald-400 flex justify-between items-center px-2 h-12 z-10">
            {user ? <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">Hello, {user.name}!</h3> : null}
        </header>

        <main className="pt-4 my-6">
            <a href="#" className="group block w-full">asdsada</a>
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-3 sm:py-0 lg:max-w-7xl lg:px-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Items published</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                <h3 className="mt-4 text-sm text-gray-700 font-medium">{user?.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{user?.location}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{user?.surname}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{user?.email}</p>

            </div>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {items.map(item => {
                    item.own && <Item
                        key={item._id}
                        location={item.location}
                        author={item.author}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    >
                    </Item>
                })}



            </section>

            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {messagesOut.map(message => {
                    return (
                        <section key={message._id}>
                            <p>Item: {message.item}</p>
                            <p>Sender: {message.sender}</p>
                            <p>Recipient: {message.recipient}</p>
                            <p>Content: {message.content}</p>
                        </section>
                    )
                })}
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {user.map(userFavs => {
                    return (
                        <section key={item._id}>
                            <p>Item: {item}</p>
                            <p>Image: {item.image}</p>
                            <p>Author: {item.author.name}</p>
                            <p>Location: {item.location}</p>
                        </section>
                    )
                })}
            </section>

            <Button plain onClick={handleOnCancelClick} className="justify-items-start">
                <ArrowUturnLeftIcon />
            </Button>

        </main >

        <div
            className="fixed z-50 w-full h-12 max-w-lg -translate-x-1/2 bg-white border border-gray-200  bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">

                <button data-tooltip-target="tooltip-home" type="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">User Profile</span>
                </button>

                <button type="button" onClick={handleOnFavItemsClick}
                    className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="size-6 w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>

                    <span className="sr-only">Fav Items</span>
                </button>


                <div id="tooltip-home" role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    User Profile
                </div>


                <div className="flex items-center justify-center">
                    <Button
                        data-tooltip-target="tooltip-new"
                        type="button"
                        color="emerald"
                        onClick={handleOnEditProfileClick}
                        className="inline-flex items-center justify-center w-10 h-10 font-medium bg-emerald-600 rounded-full hover:bg-emerald-700 group focus:ring-4 focus:ring-emerald-300 focus:outline-none dark:focus:ring-emerald-800">
                        <PlusIcon className="text-gray-50 w-24 h-24" />
                        {/* {Use text-gray-50 for a brighter white */}
                        <span className="sr-only">New item</span>
                    </Button>
                </div>

                <div id="tooltip-new" role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Edit Profile
                    <div className="tooltip-arrow"></div>
                </div>
            </div >
        </div >
    </>
}



export default UserProfile
