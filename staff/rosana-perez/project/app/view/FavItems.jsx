import { errors } from 'com'

import { Button } from '../components/button'
import { ArrowUturnLeftIcon, HeartIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import favItems from '../logic/favItems'
import toggleFav from '../logic/toggleFav'

function FavItems(props) {
    console.log('Fav Items rendering')

    const [user, setUser] = useState(null)
    const [items, setItems] = useState([])

    const { item } = props
    const itemId = item._id.toString()

    const handleOnCancelClick = () => props.onCancelClick()

    useEffect(() => {
        try {
            favItems()
                .then((user, items) => {
                    setUser(user)
                    setItems(items)
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
    }, [])  // Si el user cambia, se vuelve a ejecutar el useEffect



    const isFav = user.favs.some(item => item.id === item.id)

    const handleFavClick = (user) => {
        if (isFav) {
            toggleFav(itemId)
            console.log(`Item ${item.id} updated to favorite = ${user.id}`)
            return isFav
        }
        else console.error('Error updating favorite:', item.id)

        setItems(isFav)
    }

    const handleOnSendMessage = () => props.Home()

    return <>
        <header className="w-full bg-emerald-400 display flex justify-between items-center px-2 h-12 z-10">
            <section className="w-full flex justify-between">
                {user && <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{user.name}</h3>}
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
                    user.favs.map((item) => (

                        <Item
                            key={item.id}
                            item={item}
                            color={isFav ? 'text-red-500' : 'text-white'}
                            onMessage={handleOnSendMessage}
                        >
                            <button onClick={() => handleFavClick(user)}>
                                <HeartIcon
                                    className={`h-6 w-6 ${isFav ? 'text-red-500' : 'text-white'}`}
                                />
                            </button>
                        </Item>
                    ))
                ) : (
                    <p>No favorite items found.</p>
                )}
            </div>
        </main>
    </>

}

export default FavItems
