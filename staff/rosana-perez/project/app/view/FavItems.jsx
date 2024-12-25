import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon, HeartIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUserName from '../logic/getUserName'
import favItems from '../logic/favItems'
import toggleFav from '../logic/toggleFav'

function FavItems(props) {
    console.log('Fav Items rendering')

    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)

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

            favItems()
                .then((user) => {
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
    }, [])  // se ejecuta una sola vez al montar el componente

    const isFav = (item) => {
        if (!user || !user.favs) return false
        return user.favs.some(fav => fav._id && fav._id.equals(item.id))
    }

    const handleOnCancelClick = () => props.onCancelClick()


    const handleFavClick = () => {

        const { item } = props

        const isFavorite = isFav(item.id)

        const updatedUser = { ...user }

        if (isFavorite) {
            updatedUser.favs = updatedUser.favs.filter(fav => fav.id !== item.id)

        } else {
            updatedUser.favs.push(item)
        }
        setUser(updatedUser) //añade el item a user.favs
        toggleFav(user.id, item.id)
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
                    {user && user.favs && user.favs.length > 0 ? (
                        user.favs.map((item) => {

                            const isFavorite = isFav(item.id)
                            return (
                                <article key={item.id}>
                                    < Item
                                        item={item}
                                        color={isFavorite ? 'bg-red-500' : 'bg-white'}
                                        onMessage={handleOnSendMessage}
                                        onClick={() => handleFavClick(item)}
                                        className={`h-6 w-6 ${isFavorite ? 'bg-red-500' : 'bg-white'}`}
                                    />
                                </article>
                            )
                        })
                    ) : (
                        <p>No favorite items found.</p>
                    )}
                </div>
            </main>
        </>
    )
}

export default FavItems
