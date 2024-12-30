import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon, HeartIcon } from '@heroicons/react/24/outline'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getUser from '../logic/getUser'
import getFavItems from '../logic/getFavItems'
import toggleFav from '../logic/toggleFav'

function GetFavItems(props) {
    console.log('Fav Items rendering')

    const [user, setUser] = useState(null)
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

        getUser()
            .then((user) => setUser(user))
            .catch(error => handleError(error))
    }, [])

    useEffect(() => {
        getFavItems()
            .then((favItems) => setFavItems(favItems))
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnCancelClick = () => props.onCancelClick()

    const handleOnToggleFav = () => {
        getFavItems(user.id)
            .then(favItems => setFavItems(favItems))
            .catch(error => handleError(error))
    }

    const handleOnSendMessage = () => props.Home()


    return (
        <>
            <header className="w-full bg-emerald-200 display flex justify-between items-center px-2 h-12 z-10">
                <section className="w-full flex justify-between">
                    {name && <h3 className="text-emerald-700 flex justify-center font-bold gap-2 ">{name}</h3>}
                    <h2 className="font-bold text-emerald-700 px-2">Your favourite Items</h2>
                </section>
                <section>
                    <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                        <ArrowUturnLeftIcon />
                    </Button>
                </section>
            </header>

            <main className="pt-4 my-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {favItems.length > 0 && (favItems.map(favItem => {
                        return (
                            <Item
                                key={favItem.id}
                                itemId={favItem.id}

                                onMessage={handleOnSendMessage}
                                onToggleFavClick={handleOnToggleFav}

                            />
                        )

                    })
                    )}
                </div>
            </main>
        </>
    )
}

export default GetFavItems