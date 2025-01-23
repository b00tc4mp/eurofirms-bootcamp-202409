import { errors } from 'com'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import Item from '../components/Item'

import logic from '../logic/index.js'


function FavItems(props) {
    console.log('Fav Items rendering')

    const [favItems, setFavItems] = useState([])

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)
    }

    useEffect(() => {
        logic.getFavItems()
            .then(favItems => {
                favItems.map(item => {
                    item.fav = true
                })
                setFavItems(favItems)
                console.log('favItems ->', favItems)
            })
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnToggleFavItem = () => {
        logic.getFavItems()
            .then(favItems => setFavItems(favItems))
            .catch(error => handleError(error))
    }

    const handleOnMessage = () => props.onMessageView()


    return (
        <>
            <main>
                <div className="container mx-auto px-4 py-6">
                    <section className="text-center w-full p-2 max-w-lg">
                        <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Your favorite items</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {favItems?.length > 0 && (favItems?.map(favItem => {
                                return (
                                    <article key={favItem.id}>
                                        <Item
                                            item={favItem}
                                            onMessage={handleOnMessage}
                                            onToggleFavClick={handleOnToggleFavItem}

                                        />
                                    </article>
                                )

                            })
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default FavItems