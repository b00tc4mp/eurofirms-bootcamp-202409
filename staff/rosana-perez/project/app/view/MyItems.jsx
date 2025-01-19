import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon, GiftIcon } from '@heroicons/react/24/outline'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import OwnItem from './OwnItem'

import getUserName from '../logic/getUserName'
import getMyItems from '../logic/getMyItems'


function MyItems(props) {
    console.log('My Items rendering')

    const [name, setName] = useState(null)
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
            .then((name) => setName(name))
            .catch(error => handleError(error))

    }, [])

    useEffect(() => {
        getMyItems()
            .then((items) => setItems(items))
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnCancelClick = () => props.onCancelClick()

    const handleOnToggleSoldItem = () => {
        getMyItems()
            .then((items) => setItems(items))
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
                        {name && <h3 className="font-semibold text-gray-500 text-sm gap-2">{name}</h3>}
                    </section>

                    <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                        <ArrowUturnLeftIcon />
                    </Button>
                </header>

                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center w-full p-2 max-w-lg">
                        <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your products</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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