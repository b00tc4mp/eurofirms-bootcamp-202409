import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError, OwnershipError } = errors

import { useState, useEffect } from 'react'

import { Button } from './button'
import { Text } from './text'

import { HeartIcon, UserCircleIcon, GiftIcon, ArrowUturnLeftIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'

import getLoggedInUserId from '../logic/getLogggedInUserId'
import getUserName from '../logic/getUserName'
import logoutUser from '../logic/logoutUser'

function Header(props) {

    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)

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

    const handleLogoutClick = () => {
        try {
            logoutUser()
            props.onLogout()
        } catch (error) { handleError(error) }
    }

    const handleOnHomeClick = () => props.onSetHome()
    const handleOnCreateClick = () => props.onCreateItem()
    const handleOnChatsClick = () => props.onChats()
    const handleOnProfileClick = () => props.onUserProfile()
    const handleOnFavItemsClick = () => props.onFavItems()
    const handleOnItemsOwn = () => props.onMyItems()

    return (
        <header className="pt-0 w-full flex justify-between items-center px-2 h-24 z-10">
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
                {userName && <Text className="gap-4 mr-3 text-sm">Welcome, {userName}</Text>}
            </section>

            <nav className="flex justify-end gap-0.5">
                <Button
                    plain
                    type="button"
                    onClick={handleOnHomeClick}
                    className="inline-flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ">
                    <HomeIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">Home</span>
                </Button>
                <Button
                    plain
                    type="button"
                    onClick={handleOnProfileClick}
                    className="inline-flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ">
                    <UserCircleIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">Profile</span>
                </Button>
                <Button
                    plain
                    type="button"
                    onClick={handleOnItemsOwn}
                    className="inline-flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ">
                    <GiftIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">My Items</span>
                </Button>

                <Button
                    plain
                    data-tooltip-target="tooltip-new"
                    type="button"
                    onClick={handleOnCreateClick}
                    className="inline-flex items-center justify-center font-medium hover:bg-gray-50  dark:hover:bg-gray-800 group focus:ring-4">
                    <PlusIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">New item</span>
                </Button>

                <Button
                    plain
                    type="button" onClick={handleOnFavItemsClick}
                    className="inline-flex items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <HeartIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">Fav items</span>
                </Button>

                <Button
                    plain
                    type="button" onClick={handleOnChatsClick}
                    className="inline-flex items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <EnvelopeIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">Chat</span>
                </Button>

                <Button
                    plain
                    type="button"
                    onClick={handleLogoutClick}
                    className="inline-flex items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-emerald-600 group">
                    < ArrowUturnLeftIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-8">Logout</span>
                </Button>
            </nav >
        </header>

    )
}

export default Header