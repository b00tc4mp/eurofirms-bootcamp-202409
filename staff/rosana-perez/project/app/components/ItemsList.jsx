import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Item from './Item.jsx'
import OwnItem from './OwnItem.jsx'

import logic from '../logic/index.js'


function ItemsList() {
    console.log('ItemsList rendering')

    const [items, setItems] = useState([])

    const navigate = useNavigate()

    const handleError = error => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        }
        else if (error instanceof ValidationError) {
            alert(error.message)
        }
        else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        else {
            alert('Sorry, there was a problem. Try again later.')
        }

        console.error(error)
    }

    useEffect(() => {
        try {
            logic.getItems()
                .then(items => setItems(items))
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }, [])


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

    const handleOnItemDownloaded = (itemId) => {

        navigate("/article", { state: { itemData: itemId } })
    }


    return (
        <main>
            <div className="container w-full pt-4 pb-4 my-4 ">
                <section className="mx-auto px-4 sm:px-3 sm:py-0 lg:px-4">
                    <h2 className="text-2xl font-bold tracking-tight">New items</h2>
                </section>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {items?.map(item => {
                        return (
                            <article key={item.id} >
                                {!item.own ? (
                                    <Item
                                        item={item}
                                        onToggleFavClick={handleOnFavClick}
                                        onMessageSent={handleOnMessageSent}
                                        onItemDownload={handleOnItemDownloaded}
                                    />
                                ) : (
                                    <OwnItem
                                        item={item}
                                        onDeleted={handleOnDeleted}
                                        onToggleSold={handleOnItemSold}
                                        onEditItem={handleOnItemEdited}
                                        onItemDownload={handleOnItemDownloaded}
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


export default ItemsList
