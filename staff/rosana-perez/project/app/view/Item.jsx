import { errors, util } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Text } from '../components/text'
import { Field, Label } from '/components/fieldset'
import { Dialog, DialogActions, DialogBody } from '../components/dialog'
import { ArrowUturnLeftIcon, EnvelopeIcon, HeartIcon, PencilSquareIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError } = errors

import deleteItem from '../logic/deleteItem'
import sellItem from '../logic/sellItem'
import editItem from '../logic/editItem'
import getItem from '../logic/getItem'
import sendMessage from '../logic/sendMessage.js'
import toggleFav from '../logic/toggleFav.js'
import isUserLoggedIn from '../logic/isUserLoggedIn.js'

import { useState, useEffect } from 'react'

function Item(props) {
    console.log('Item rendering')

    const [edit, setEdit] = useState(false)
    const [message, setMessage] = useState(false)
    const [item, setItem] = useState(null)
    const [timestamp, setTimeStamp] = useState(Date.now())

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

    function toggleMessage(state) {
        setMessage(state)
    }

    const [isOpen, setIsOpen] = useState(false)

    const itemId = props.itemId
    const itemDate = util.formatIsoDate(item)

    const userLoggedIn = isUserLoggedIn()


    useEffect(() => {
        getItem(itemId)
            .then(item => setItem(item))
            .catch(error => handleError(error))
    }, [timestamp])


    const handleOnEditItemSubmit = event => {
        event.preventDefault()

        const form = event.target
        const titleInput = form.title
        const newTitle = titleInput.value

        try {
            editItem(item?.id, newTitle)
                .then(() => {
                    setIsOpen(false)
                    setTimeStamp(Date.now())
                })
                .catch(error => { handleError(error) })

        } catch (error) { handleError(error) }
    }

    const handleOnEditClick = () => {
        setEdit(true)
        setIsOpen(true)
    }

    const handleOnEditCancelClick = () => setIsOpen(false)

    const handleOnMessage = event => {
        event.preventDefault()

        const form = event.target

        const contentText = form.text
        const content = contentText.value

        const { chatId } = props

        if (content) {
            try {
                sendMessage(content, chatId, itemId)
                    .then(() => {
                        toggleMessage(false)
                        setTimeStamp(Date.now())
                    })
                    .catch(error => { handleError(error) })

            } catch (error) { handleError(error) }
        }
    }

    const handleOnMessageClick = () => { toggleMessage(true) }

    const handleOnMessageExit = () => { toggleMessage(false) }

    const handleOnDeleteClick = () => {
        if (confirm('Delete item?')) {
            try {
                deleteItem(item?.id)
                    .then(() => props.onDeleted())
                    .catch(error => handleError(error))

            } catch (error) { handleError(error) }
        }
    }
    const handleOnItemSold = () => {
        try {
            sellItem(item?.id)
                .then(() => {
                    setTimeStamp(Date.now())
                })
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }

    const handleToggleFavClick = () => {
        try {
            toggleFav(item?.id)
                .then(() => {
                    props.onToggleFavClick()
                    setTimeStamp(Date.now())
                })
                .catch(error => handleError(error))

        } catch (error) { handleError(error) }
    }

    return (
        item ? (
            !item?.sold ? ( //item.sold[false]
                <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                    <a key={item?.id} href="#" className="group block">
                        <img
                            alt="Product image"
                            src={item?.image}
                            className="object-cover w-40 h-40 object-center rounded-lg group-hover:opacity-75"
                        />
                        <section>
                            <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                                <h3>{item?.author.username}</h3>
                                <p>{item?.location}</p>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">{item?.title}</p>
                            <Text className="mt-1 text-sm font-medium">{item?.description}</Text>
                        </section>
                        {userLoggedIn && (
                            <main>
                                <div className="mt-4 flex flex-wrap justify-between gap-2">
                                    {item?.own && (
                                        <>
                                            <Button
                                                className="btn sm:w-auto"
                                                plain
                                                color="white"
                                                type="button"
                                                onClick={handleOnDeleteClick}
                                            >
                                                <TrashIcon />
                                            </Button>
                                            <Button
                                                className="btn sm:w-auto"
                                                plain
                                                color="white"
                                                type="button"
                                                onClick={handleOnEditClick}
                                            >
                                                <PencilSquareIcon />
                                            </Button>
                                            <Button
                                                plain
                                                className="btn sm:w-auto"
                                                type="button"
                                                onClick={handleOnItemSold}
                                            >
                                                <ShoppingBagIcon
                                                />
                                            </Button>
                                        </>
                                    )}
                                </div>
                                <div className="mt-4 flex flex-wrap justify-between gap-2">
                                    {!item?.own && (
                                        <>
                                            <Button
                                                className="btn sm:w-auto"
                                                plain
                                                color="white"
                                                type="button"
                                                onClick={handleOnMessageClick}
                                            >
                                                <EnvelopeIcon />
                                            </Button>
                                            <Button
                                                plain
                                                className="btn sm:w-auto"
                                                type="button"
                                                onClick={handleToggleFavClick}
                                            >
                                                <HeartIcon
                                                    fill={item?.fav ? '#b91c1c' : 'white'}
                                                    stroke={item?.fav ? '#b91c1c' : '#71717a'}
                                                />
                                            </Button>
                                        </>
                                    )}
                                </div>

                                {edit && (
                                    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                                        <form className="flex flex-col items-center" onSubmit={handleOnEditItemSubmit}>
                                            <section>
                                                <DialogBody>
                                                    <Field>
                                                        <Label>New title</Label>
                                                        <Input type="text" id="title" name="title" placeholder={item?.title} />
                                                    </Field>
                                                </DialogBody>
                                                <DialogActions>
                                                    <Button type="submit">Edit</Button>
                                                    <Button plain onClick={handleOnEditCancelClick}>
                                                        Cancel
                                                    </Button>
                                                </DialogActions>
                                            </section>
                                        </form>
                                    </Dialog>
                                )}

                                {message && (
                                    <form className="flex flex-col items-center" onSubmit={handleOnMessage}>
                                        <Field>
                                            <Label htmlFor="text" className="text-xs">Write a message:</Label>
                                            <Textarea type="text" id="text"></Textarea>
                                        </Field>

                                        <div className="flex justify-between h-4 items-center my-6 m-2">
                                            <Button
                                                className="btn sm:w-auto justify-items-start"
                                                plain
                                                color="white"
                                                onClick={handleOnMessageExit}
                                            >
                                                <ArrowUturnLeftIcon />
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="btn sm:w-auto justify-items-start"
                                                plain
                                                color="white"
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </form>
                                )}
                                <div className="sm:w-auto text-xs">{itemDate}</div>
                            </main>
                        )}
                    </a>
                </article>
            ) : ( //item.sold[true]
                <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 opacity-50">
                    <a key={item?.id} href="#" className="group block">
                        <img
                            alt="Product image"
                            src={item?.image}
                            className="object-cover w-40 h-40 object-center rounded-lg group-hover:opacity-50"
                        />
                        <p className="mt-1 text-sm font-medium">Item no available</p>
                        <section>
                            <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                                <h3>{item?.author.username}</h3>
                                <p>{item?.location}</p>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">{item?.title}</p>
                            <Text className="mt-1 text-sm font-medium">{item?.description}</Text>
                        </section>
                    </a>
                </article>
            )
        ) : (
            <div>Loading...</div>
        )
    )
}

export default Item