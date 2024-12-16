import { errors, formatIsoDate } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, Label } from '/components/fieldset'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../components/dialog'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteItem from '../logic/deleteItem'
import editItem from '../logic/editItem'
import sendMessage from '../logic/sendMessage.js'

import { useState } from 'react'

function Item(props) {
    console.log('Item rendering')

    const [edit, setEdit] = useState(false)
    const [message, setMessage] = useState(false)

    function toggleEdit(state) {
        setEdit(state)
    }

    function toggleMessage(state) {
        setMessage(state)
    }

    let [isOpen, setIsOpen] = useState(false)

    const { item } = props
    const itemDate = formatIsoDate(item.updatedAt)

    const handleOnEditItemSubmit = event => {
        event.preventDefault()

        const form = event.target
        const textInput = form.text
        const newText = textInput.value

        try {
            if (confirm('Edit Item?'))
                editItem(item.id, newText)
                    .then(() => {
                        toggleEdit(false)
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

    const handleOnEditClick = () => setIsOpen(true)

    const handleOnEditCancelClick = () => setIsOpen(false)

    const handleOnEditItemClick = () => setIsOpen(false)

    const handleOnToggleEditClick = () => toggleEdit(false)

    const handleOnMessageSubmit = event => {
        event.preventDefault()

        const form = event.target

        const contentText = form.text
        const content = contentText.value

        const itemId = item.id
        const recipientId = item.author.id


        if (content) {
            try {
                if (confirm('Contact sharer?')) {

                    sendMessage(itemId, recipientId, content)

                        .then(() => {
                            toggleMessage(false)

                            props.onMessage()
                        })
                        .catch(error => {
                            console.error(error)
                            alert(error.message)
                        })
                }
            } catch (error) {
                console.error(error)
                alert(error.message)
            }
        }
    }

    const handleOnToggleMessageClick = () => { toggleMessage(false) }

    const handleOnToggleMessageClickTrue = () => { toggleMessage(true) }

    const handleOnDeleteClick = () => {
        if (confirm('Delete item?')) {
            try {
                deleteItem(item.id)
                    .then(() => props.onDeleted())
                    .catch(error => {
                        if (error instanceof NotFoundError) {
                            alert(error.message)
                        } else if (error instanceof OwnershipError) {
                            alert(error.message)
                        } else if (error instanceof SystemError) {
                            alert('Sorry, there was a problem. Try again later.')
                        }

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

    const handleOnToggleEditClickTrue = () => { toggleEdit(true) }

    return (
        <main className="bg-white w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"> {/* Adjusted padding for mobile */}
            <a key={item.id} href="#" className="group block w-full">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                        alt="Product image"
                        src={item.image}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>

                <h3 className="mt-4 text-sm text-gray-700 font-medium">{item.author.username}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{item.title}</p>
                <p className="text-xs">{item.description}</p>

                {edit ? (
                    <>
                        <form className="flex flex-col items-center" onSubmit={handleOnEditItemSubmit}>
                            <Button type="button" onClick={handleOnEditClick}>
                                Edit your item.
                            </Button>
                            <Dialog open={isOpen} onClose={setIsOpen}>
                                <DialogTitle>Edit</DialogTitle>
                                <DialogDescription>
                                    The message will be edited.
                                </DialogDescription>
                                <DialogBody>
                                    <Field>
                                        <Label>Text</Label>
                                        <Input name="text" placeholder="write your new text" />
                                    </Field>
                                </DialogBody>
                                <DialogActions>
                                    <Button plain onClick={handleOnEditCancelClick}>
                                        Cancel
                                    </Button>
                                    <Button onClick={handleOnEditItemClick}>Edit</Button>
                                </DialogActions>
                            </Dialog>
                            <Input className="p-4 text-emerald-300 text-sm" type="text" id="text" placeholder={item.text} />
                            <div className="flex justify-between h-4 items-center my-6 m-2">
                                <Input className="m-2" type="submit" value={'Edit Text'} />
                                <Button plain color="white" className="justify-items-start" onClick={handleOnToggleEditClick}>
                                    <ArrowUturnLeftIcon />
                                </Button>

                            </div>
                        </form>
                    </>
                ) : null}


                {message ? (
                    <>
                        <form className="flex flex-col items-center" onSubmit={handleOnMessageSubmit}>
                            <label htmlFor="text">Write a message:</label>
                            <Textarea type="text" id="text" name="text" ></Textarea>

                            <div className="flex justify-between h-4 items-center my-6 m-2">
                                <Button className="m-2" type="submit">Send</Button>
                                <Button plain color="white" className="justify-items-start" onClick={handleOnToggleMessageClick}>
                                    <ArrowUturnLeftIcon />
                                </Button>

                            </div>
                        </form>
                    </>
                ) : null}

                <div className="flex justify-between mt-2">
                    <time className="text-xs">{itemDate}</time>

                    {item.own === (false) &&
                        <Button color="white" type="button" onClick={handleOnToggleMessageClickTrue}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        </Button>

                    }
                    {item.own && (
                        <Button color="white" type="button" onClick={handleOnDeleteClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </Button>
                    )}

                    {item.own && (
                        <Button color="white" type="button" onClick={handleOnToggleEditClickTrue}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </Button>
                    )}


                </div>
            </a>
        </main >
    )
}

export default Item;
