import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import OwnItem from '../components/OwnItem'

import getUserName from '../logic/getUserName'
import getItemsFromUser from '../logic/getItemsFromUser'


function MyItems(props) {
    console.log('My Items rendering')

    const [userName, setUserName] = useState(null)
    const [items, setItems] = useState([])

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)
    }

    useEffect(() => {
        getUserName()
            .then(userName => setUserName(userName))
            .catch(error => handleError(error))

    }, [])

    useEffect(() => {
        getItemsFromUser()
            .then(items => setItems(items))
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnCancelClick = () => props.onCancelClick()

    const handleOnToggleSoldItem = () => {
        getItemsFromUser()
            .then(items => setItems(items))
            .catch(error => handleError(error))
    }

    return (
        <>
            <main>
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
                    <section className="flex justify-start">
                        {userName && <h3 className="font-semibold text-gray-500 text-sm gap-2">{userName}</h3>}
                    </section>

                    <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                        <ArrowUturnLeftIcon />
                    </Button>
                </header>

                <div className="container mx-auto px-4 py-6">
                    <div className="text-center w-full p-2 max-w-lg">
                        <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your products</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {items?.length > 0 && (items?.map(item => {
                                return (
                                    <OwnItem
                                        key={item.id}
                                        item={item}
                                        onToggleSold={handleOnToggleSoldItem}

                                    />
                                )
                            })
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MyItems