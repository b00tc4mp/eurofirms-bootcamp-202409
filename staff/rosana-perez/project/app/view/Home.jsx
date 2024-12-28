import { errors } from 'com'

import { Button } from '../components/button'
import { PlusIcon } from '@heroicons/react/24/solid'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getItems from '../logic/getItems'
import logoutUser from '../logic/logoutUser'
import { HeartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

function Home(props) {
    console.log('Home rendering')


    const [name, setName] = useState(null)
    const [user, setUser] = useState(null)
    const [items, setItems] = useState([])

    const { item } = props

    console.log('Home -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then((name) => {
                    setName(name)
                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })

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
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])


    useEffect(() => {
        try {
            if (user && user.favs) {
                const isFav = user.favs.some(fav => fav.id === item.id)
                return isFav
            }
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [user])


    const handleLogoutClick = () => {
        try {
            logoutUser()
            props.onLogout()
        } catch (error) {
            alert(error.message)
            console.error(error)
        }
    }

    const handleOnDeleted = () => {
        getItems()
            .then(items => setItems(items))
            .catch(error => {
                console.error(error)

            })
    }

    const handleOnEdited = () => {
        getItems()
            .then(items => setItems(items))
            .catch(error => {
                console.error(error)
            })
    }

    const handleOnSent = () => {
        getItems()
            .then(items => setItems(items))
            .catch(error => {
                console.error(error)
            })
    }

    const handleOnCreateClick = () => props.onCreateItem()

    const handleToggleFavClick = () => {
        getItems()
            .then(items => setItems(items))
            .catch(error => {
                console.error(error)
            })
    }

    const handleOnProfileClick = () => props.onUserProfile()

    const handleOnGetFavItemsClick = () => props.onGetFavItems()

    return (
        <main>
            <header className=" pt-0 w-full flex justify-between bg-emerald-200 items-center px-2 h-24 z-10">
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
                    {name && <h3 className="font-bold text-emerald-700 gap-2">{name}</h3>}
                </section>

                <nav className="flex justify-end gap-0.5">

                    <Button
                        plain
                        type="button"
                        onClick={handleOnProfileClick}
                        className="inline-flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ">
                        <UserCircleIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                        <span className="sr-only">Profile</span>
                    </Button>

                    <Button
                        plain
                        data-tooltip-target="tooltip-new"
                        type="button"
                        onClick={handleOnCreateClick}
                        className="inline-flex items-center justify-center font-medium hover:bg-gray-50  dark:hover:bg-gray-800 group focus:ring-4">
                        <PlusIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                        <span className="sr-only">New item</span>
                    </Button>

                    <Button
                        plain
                        type="button" onClick={handleOnGetFavItemsClick}
                        className="inline-flex items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <HeartIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                        <span className="sr-only">Fav Items</span>
                    </Button>

                    <Button
                        plain
                        type="button"
                        onClick={handleLogoutClick}
                        className="inline-flex items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-emerald-600 group">
                        < ArrowUturnLeftIcon className="size-6 w-5 h-5 mb-1 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-600" />
                        <span className="sr-only">Logout</span>
                    </Button>
                </nav >
            </header>

            <div className="container w-full pt-4 pb-4 my-6 ">
                <section className="mx-auto max-w-2xl px-4 py-2 sm:px-3 sm:py-0 lg:max-w-7xl lg:px-4">
                    <h2 className="text-2xl font-bold tracking-tight text-emerald-900">New listings</h2>
                </section>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {items.map(item => {
                        const isFav = user && user.favs ? user.favs.some(fav => fav.id === item.id) : false
                        return (
                            <article key={item.id}>
                                < Item
                                    item={item}
                                    isFav={isFav}
                                    onDeleted={handleOnDeleted}
                                    onEdited={handleOnEdited}
                                    onMessage={handleOnSent}
                                    onToggleFavClick={handleToggleFavClick}
                                />
                            </article>
                        )
                    })}
                </section>
            </div>
        </main >
    )
}

export default Home
