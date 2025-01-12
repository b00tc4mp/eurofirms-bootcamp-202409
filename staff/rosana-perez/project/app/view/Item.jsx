import { errors, util } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Text } from '../components/text'
import { Field, Label } from '/components/fieldset'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../components/dialog'
import { ArrowUturnLeftIcon, EnvelopeIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteItem from '../logic/deleteItem'
import editItem from '../logic/editItem'
import getItem from '../logic/getItem'
import sendMessage from '../logic/sendMessage.js'
import toggleFav from '../logic/toggleFav.js'

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
        } else if (error instanceof OwnershipError) {
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

    useEffect(() => {
        getItem(itemId)
            .catch(error => handleError(error))
            .then(item => setItem(item))
    }, [timestamp])


    const handleOnEditItemSubmit = event => {
        event.preventDefault()

        const form = event.target
        const textInput = form.text
        const newText = textInput.value

        try {
            editItem(item?.id, newText)
                .then(() => {
                    setIsOpen(false)
                    props.onEdited()
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    const handleOnEditClick = () => {
        console.log('Edit button clicked')
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

                        props.onMessage()
                    })
                    .catch(error => {
                        console.error(error)
                        alert(error.message)
                    })
            } catch (error) {
                console.error(error)
                alert(error.message)
            }
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
        <>
            {item ? (
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
                                </>
                            )}

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
                                                <Input type="text" id="text" placeholder={item?.text} />
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
                    </a>
                </article>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default Item
