import { errors } from 'com'

const { SystemError, NotFoundError } = errors

import { useState, useEffect } from 'react'

import OwnItem from '../components/OwnItem'

import logic from '../logic/index.js'


function MyItems(props) {
    console.log('My Items rendering')

    const [items, setItems] = useState([])

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)
    }

    useEffect(() => {
        logic.getItemsFromUser()
            .then(items => setItems(items))
            .catch(error => handleError(error))

    }, [])// se ejecuta nuevamente si cambia el user


    const handleOnToggleSoldItem = () => {
        logic.getItemsFromUser()
            .then(items => setItems(items))
            .catch(error => handleError(error))
    }

    return (
        <>
            <main>
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