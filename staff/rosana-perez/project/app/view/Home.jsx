import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Item from '../components/Item'
import OwnItem from '../components/OwnItem'

import logic from '../logic/index.js'


function Home() {
    console.log('Home rendering')

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
            logic.getItems()
                .then(items => setItems(items))
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }, [])

    console.log('Home -> state: name = ' + name)

    const updateItems = () => {
        logic.getItems()
            .then(items => setItems(items))
            .catch(error => handleError(error))
    }

    const handleOnDeleted = () => updateItems()
    const handleOnFavClick = () => updateItems()
    const handleOnItemSold = () => updateItems()
    const handleOnItemEdited = () => updateItems()
    const handleOnMessageSent = () => updateItems()


    return (
        <main>
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
