import { errors } from 'com'

import { Text } from '../components/text'

import Item from '../components/Item.jsx'
import OwnItem from '../components/OwnItem.jsx'

import { useState, useEffect } from 'react'

const { ValidationError, SystemError, NotFoundError } = errors

import logic from '../logic/index.js'

function Article({ itemId }) {
    console.log('Article rendering')

    const [itemViewed, setItemViewed] = useState([])

    const handleError = (error) => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        } else if (error instanceof ValidationError) {
            alert(error.message)
        } else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        console.error(error)
    }

    useEffect(() => {
        try {
            logic.getItem(itemId)
                .then(itemViewed => setItemViewed(itemViewed))
                .catch(error => handleError(error))

        } catch (error) { handleError(error) }
    }, [])


    return (
        <main className="flex justify-center items-center" >
            <div className="container w-full pt-4 pb-4 my-4 ">
                <section className="mx-auto px-4 sm:px-3 sm:py-0 lg:px-4">
                    <h2 className="text-2xl font-bold tracking-tight flex justify-center">{itemViewed?.title}</h2>
                    <Text className="mt-1 flex items-start text-sm font-medium">{itemViewed.description}</Text>
                </section>
                <section className="w-full gap-12 h-100">
                    {itemViewed ? (
                        <article key={itemViewed?.id} >
                            {!itemViewed.own ? (
                                <Item
                                    item={itemViewed}
                                />
                            ) : (
                                <OwnItem
                                    item={itemViewed}
                                />
                            )}
                        </article>
                    ) : (
                        <span>Item not found</span>
                    )}
                </section>
            </div>
        </main >
    )
}

export default Article
