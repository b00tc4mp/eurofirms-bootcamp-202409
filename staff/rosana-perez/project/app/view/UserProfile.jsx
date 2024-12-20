import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Text, TextLink } from '../components/text'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import getUser from '../logic/getUser'
import getItems from '../logic/getItems'
import getMessages from '../logic/getMessages'

const { NotFoundError, SystemError, ValidationError } = errors

function UserProfile(props) {
    console.log('UserProfile rendering')

    const [user, setUser] = useState(null)
    const [items, setItems] = useState([])
    const [messages, setMessages] = useState(null)

    const itemOwn = items.findby(author).some(user => user.id === user.id)

    console.log('User Profile -> state: user = ' + user)

    function loadAll() {

        if (itemOwn) {
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
                if (error instanceof ValidationError) {
                    alert(error.message)
                } else {
                    alert('Sorry, there was a problem. Try again later.')
                }
                console.error(error)
            }

            if (messages) {
                try {
                    getMessages()
                        .then(messages => setMessages(messages))
                        .catch(error => {
                            if (error instanceof NotFoundError)
                                alert(error.message)
                            else if (error instanceof SystemError)
                                alert('Sorry, there was a problem. Try again later.')

                            console.error(error)
                        })
                } catch (error) {
                    if (error instanceof ValidationError) {
                        alert(error.message)
                    } else {
                        alert('Sorry, there was a problem. Try again later.')
                    }
                    console.error(error)
                }
            }
        }
    }


    useEffect(() => {
        try {
            getUser()
                .then(user => { setUser(user) })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })

            loadAll()

        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Sorry, there was a problem. Try again later.')

            console.error(error)
        }
    }, [])

    const handleOnCancelClick = () => props.onCancelClick()


    return <>
        <header className="w-full bg-emerald-400 flex justify-between items-center px-2 h-12 z-10">
            {user ? <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{user}</h3> : null}

            <Button color="white" type="button" onClick={handleLogoutClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </Button>
        </header>

        <main className="pt-4 my-6">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-3 sm:py-0 lg:max-w-7xl lg:px-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Items published</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {user => {
                    return (
                        <User
                            key={user.id}
                            user={user}
                            location={location}
                            password={password}
                        />
                    )
                }}


                {items.map(item => {
                    const isFav = user && user.favs ? user.favs.some(favs => favs.id === item.id) : false
                    return (
                        < Item
                            key={item.id}
                            item={item}
                            isFav={isFav}
                        />
                    )
                })}

                {messages.map(message => {
                    return (
                        <Message
                            key={message.id}
                            item={item}
                            recipient={recipient.id}
                            content={content} />
                    )
                })}

            </div>

            <Button plain onClick={handleOnCancelClick} className="justify-items-start">
                <ArrowUturnLeftIcon />
            </Button>
        </main>

        <div
            className="fixed z-50 w-full h-12 max-w-lg -translate-x-1/2 bg-white border border-gray-200  bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">

                <button data-tooltip-target="tooltip-home" type="button"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">User Profile</span>
                </button>

                <div id="tooltip-home" role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    User Profile
                </div>


                <div className="flex items-center justify-center">
                    <Button
                        data-tooltip-target="tooltip-new"
                        type="button"
                        color="emerald"
                        onClick={handleOnEditProfileClick}
                        className="inline-flex items-center justify-center w-10 h-10 font-medium bg-emerald-600 rounded-full hover:bg-emerald-700 group focus:ring-4 focus:ring-emerald-300 focus:outline-none dark:focus:ring-emerald-800">
                        <PlusIcon className="text-gray-50 w-24 h-24" /> {/* Use text-gray-50 for a brighter white */}
                        <span className="sr-only">New item</span>
                    </Button>
                </div>

                <div id="tooltip-new" role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Edit Profile
                    <div className="tooltip-arrow"></div>
                </div>
            </div>
        </div>
    </>

}

export default UserProfile
