import { errors } from 'com'

import { Button } from '../components/button'
import { Text } from '../components/text'
import { PlusIcon } from '@heroicons/react/24/solid'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Item from '../components/Item'
import OwnItem from '../components/OwnItem'

import getUserName from '../logic/getUserName'
import getItems from '../logic/getItems'
import logoutUser from '../logic/logoutUser'
import { HeartIcon, UserCircleIcon, GiftIcon } from '@heroicons/react/24/outline'
import { ArrowUturnLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function Home(props) {
    console.log('Home rendering')

    const [userName, setUserName] = useState(null)
    const [items, setItems] = useState([])

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
        try {
            getUserName()
                .then(userName => {
                    setUserName(userName)
                })
                .catch(error => handleError(error))

            getItems()
                .then(items => setItems(items))
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }, [])

    console.log('Home -> state: name = ' + name)

    const handleLogoutClick = () => {
        try {
            logoutUser()
            props.onLogout()
        } catch (error) { handleError(error) }
    }

    const updateItems = () => {
        getItems()
            .then(items => setItems(items))
            .catch(error => handleError(error))
    }

    const handleOnDeleted = () => updateItems()
    const handleOnFavClick = () => updateItems()
    const handleOnItemSold = () => updateItems()
    const handleOnItemEdited = () => updateItems()
    const handleOnMessageSent = () => updateItems()

    const handleOnCreateClick = () => props.onCreateItem()
    const handleOnChatsClick = () => props.onChats()
    const handleOnProfileClick = () => props.onUserProfile()
    const handleOnFavItemsClick = () => props.onFavItems()
    const handleOnItemsOwn = () => props.onMyItems()

    return (
        <main>
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
    -translate-x-1/2 translate-y-full opacity-0 m-8">Own Items</span>
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
    -translate-x-1/2 translate-y-full opacity-0 m-8">Profile</span>
                    </Button>
                </nav >
            </header>

            <div className="container w-full pt-4 pb-4 my-4 ">
                <section className="mx-auto px-4 sm:px-3 sm:py-0 lg:px-4">
                    <h2 className="text-2xl font-bold tracking-tight">New items</h2>
                </section>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {items.map(item => {
                        return (
                            <article key={item.id}>
                                {!item.own ? (
                                    <Item
                                        item={item}
                                        onToggleFavClick={handleOnFavClick}
                                        onMessageSent={handleOnMessageSent}

                                    />
                                ) : (
                                    <OwnItem
                                        item={item}
                                        onDeleted={handleOnDeleted}
                                        onToggleSold={handleOnItemSold}
                                        onEditItem={handleOnItemEdited}
                                    />
                                )}
                            </article>)
                    }
                    )}
                </section>
            </div>
        </main >
    )
}

export default Home
