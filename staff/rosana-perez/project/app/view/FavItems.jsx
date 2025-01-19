import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon, HeartIcon } from '@heroicons/react/24/outline'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getFavItems from '../logic/getFavItems'


function FavItems(props) {
    console.log('Fav Items rendering')

    const [name, setName] = useState(null)
    const [favItems, setFavItems] = useState([])

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
        getFavItems()
            .then((favItems) => {
                favItems.map(item => {
                    item.fav = true
                })
                setFavItems(favItems)
                console.log('favItems ->', favItems)
            })
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnCancelClick = () => props.onCancelClick()

    const handleOnToggleFavItem = () => {
        getFavItems()
            .then(favItems => setFavItems(favItems))
            .catch(error => handleError(error))
    }

    const handleOnMessage = () => props.onMessageView()


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
                        <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your favorite items</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {favItems?.length > 0 && (favItems?.map(favItem => {
                                return (
                                    <Item
                                        key={favItem.id}
                                        item={favItem}
                                        onMessage={handleOnMessage}
                                        onToggleFavClick={handleOnToggleFavItem}

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

export default FavItems