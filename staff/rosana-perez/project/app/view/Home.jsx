import { errors } from 'com'

import { Button } from '../components/button'
import { PlusIcon } from '@heroicons/react/24/solid'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUser from '../logic/getUser'
import getItems from '../logic/getItems'
import logoutUser from '../logic/logoutUser'


function Home(props) {
    console.log('Home rendering')


    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)

    const [items, setItems] = useState([])

    console.log('Home -> state: name = ' + name)

    function loadItems() {
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


    useEffect(() => {
        try {
            getUser()
                .then(() => {
                    user => setUser(user)
                    name => setName(name)
                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })

            loadItems()

        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])  // Si el user cambia, se vuelve a ejecutar el useEffect


    useEffect(() => {
        if (user && user.favs) {

            const isFav = user.favs.some(item => item.id === item.id)
            console.log(isFav)
            return isFav
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logoutUser()
            props.onLogout()
        } catch (error) {
            alert(error.message)
            console.error(error)
        }
    }

    const handleOnDeleted = () => loadItems()
    const handleOnEdited = () => loadItems()
    const handleOnSent = () => loadItems()
    const handleOnCreateClick = () => props.onCreateItem()
    const handleToggleFavClick = () => loadItems()
    const handleOnProfileClick = () => props.onUserProfile()

    return (
        <>
            <header className="w-full bg-emerald-400 flex justify-between items-center px-2 h-12 z-10">
                {user?.name && <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{user.username}</h3>}

                <Button color="white" type="button" onClick={handleLogoutClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                </Button>
            </header>

            <main className="pt-4 my-6">
                <div className="mx-auto max-w-2xl px-4 py-10 sm:px-3 sm:py-0 lg:max-w-7xl lg:px-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent products</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {items.map(item => {
                        const isFav = user && user.favs ? user.favs.some(fav => fav.id === item.id) : false
                        return (
                            < Item
                                key={item.id}
                                item={item}
                                isFav={isFav}
                                onDeleted={handleOnDeleted}
                                onEdited={handleOnEdited}
                                onMessage={handleOnSent}
                                onToggleFavClick={handleToggleFavClick}
                            />
                        )
                    })}
                </div>
            </main>

            <div
                className=" fixed z-50 h-12 max-w-lg -translate-x-1/2 bg-white border border-gray-200  bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">

                    <div className="flex items-center justify-center">
                        <Button
                            data-tooltip-target="tooltip-new"
                            type="button"
                            color="emerald"
                            onClick={handleOnCreateClick}
                            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-emerald-600 rounded-full hover:bg-emerald-700 group focus:ring-4 focus:ring-emerald-300 focus:outline-none dark:focus:ring-emerald-800">
                            <PlusIcon className="text-gray-50 w-24 h-24" /> {/* Use text-gray-50 for a brighter white */}
                            <span className="sr-only">New item</span>
                        </Button>
                    </div>


                    <button type="button" onClick={handleOnProfileClick}
                        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="sr-only">Profile</span>
                    </button>

                    <div
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home
