import { errors } from 'com'

const { SystemError } = errors

import { Button } from '../components/button'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Item from '../components/Item'

import logic from '../logic/index.js'


function ItemsAsGuest() {

    console.log('ItemList rendering')

    const [items, setItems] = useState(null)

    const navigate = useNavigate()

    const handleError = error => {
        if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        else {
            alert('Sorry, there was a problem. Try again later.')
        }

        console.error(error)
    }

    useEffect(() => {
        logic.getItemsAsGuest()
            .then(items => setItems(items))
            .catch(error => handleError(error))
    }, [])

    const handleOnExit = () => navigate("/welcome")

    const handleOnItemClick = () => {
        alert('Please, login or register. You will be redirected. Thanks.')
        navigate("/login")
    }

    return (

        <main>
            <header className="w-full flex justify-between items-center px-4 h-24 bg-white shadow-md z-10">
                <div className="flex lg:flex-1">
                    <a href="#" className="flex items-center m-1.5 p-1.5">
                        <span className="sr-only">Dona2</span>
                        <img
                            alt="Dona2 logo"
                            src="/images/greenWorld.png"
                            className="h-12 w-auto"
                        />
                        <p className="ml-3 text-emerald-700 font-semibold text-lg">Dona2</p>
                    </a>
                </div>
                <Button
                    plain
                    onClick={handleOnExit}
                    className="flex items-center justify-center p-2">
                    <ArrowUturnLeftIcon
                        className="h-6 w-6 text-gray-700" />
                </Button>
            </header>

            <div className="container mx-auto px-4 py-6">
                <section className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">New Listings</h2>
                </section>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">

                    {items?.map(item => {
                        return (
                            !item.sold && (  //item.sold[false] 
                                <article
                                    key={item.id}
                                    onClick={handleOnItemClick}>
                                    <Item
                                        item={item}
                                        className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-200"
                                    />
                                </article>
                            )
                        )
                    })}
                </section>
            </div>
        </main>
    )
}

export default ItemsAsGuest