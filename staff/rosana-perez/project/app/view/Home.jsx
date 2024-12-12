import { errors } from 'com'
import { Button } from '../components/button'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getItems from '../logic/getItems'
import logoutUser from '../logic/logoutUser'


function Home(props) {
    console.log('Home rendering')

    const [name, setName] = useState(null)
    const [items, setItems] = useState([])

    console.log('Home -> state: name = ' + name)

    function loadItems() {
        try {
            getItems()
                .then(items => setItems(items))
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
        }
    }

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })

            loadItems()
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])

    return <>

        <header className="w-full top-28 bg-emerald-300 flex justify-between items-center px-2 h-12 z-10">{name && <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{name}</h3>}

            <Button color="white" type="button" onClick={() => {
                try {
                    logoutUser()

                    props.onLogout()
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </Button>

        </header>

        {<main className="pt-[120px] pb-8 my-6 bg-gray-100">
            {items.map(item => <Item key={item.id} item={item} onDeleted={() => loadItems()} onEdited={() => loadItems()} />
            )}

        </main>}

        <footer className="bg-emerald-300 fixed bottom-0 z-10 w-full flex justify-center items-center h-12">
            <Button color="emerald" type="button" className="fixed justify-center" onClick={() => props.onCreateItem()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Button>
        </footer>
    </>
}

export default Home
