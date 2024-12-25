import { errors, formatIsoDate } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, Label } from '/components/fieldset'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../components/dialog'
import { ArrowUturnLeftIcon, EnvelopeIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteItem from '../logic/deleteItem'
import editItem from '../logic/editItem'
import sendMessage from '../logic/sendMessage.js'
import toggleFav from '../logic/toggleFav.js'

import { useState } from 'react'

function Item(props) {
    console.log('Item rendering')

    const [edit, setEdit] = useState(false)
    const [message, setMessage] = useState(false)

    function toggleMessage(state) {
        setMessage(state)
    }

    const [isOpen, setIsOpen] = useState(false)

    const { item } = props
    const itemId = props.item.id
    const itemDate = formatIsoDate(item)


    const handleOnEditItemSubmit = event => {
        event.preventDefault()

        const form = event.target
        const textInput = form.text
        const newText = textInput.value

        try {
            if (confirm('Edit Item?'))
                editItem(item.id, newText)
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

    const handleOnSentMessage = event => {
        event.preventDefault()

        const form = event.target

        const contentText = form.text
        const content = contentText.value

        const recipientId = item.author.id

        if (content) {
            try {
                if (confirm('Send Message?')) {

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

    const handleOnToggleMessageClick = () => { toggleMessage(true) }

    const handleOnToggleMessageOut = () => { toggleMessage(false) }

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

    const handleToggleFavClick = () => {
        try {
            toggleFav(item.id)
                .then(() => { props.onToggleFavClick() })

                .catch(error => {
                    if (error instanceof NotFoundError) {
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


    return (
        <article className="bg-white w-full container-fluid px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <a key={item.id} href="#" className="group block w-full">
                <section className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                        alt="Product image"
                        src={item.image}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </section>
                <section>
                    <div className="flex justify-between items-start m-1 text-[0.875rem] text-[#4B5563]">
                        <h3>{item.author.username}</h3>
                        <p>{item.location}</p>
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{item.description}</p>

                </section>
                {edit ? (
                    <>
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                            <form className="flex flex-col items-center" onSubmit={handleOnEditItemSubmit}>
                                <section><DialogTitle>Edit</DialogTitle>
                                    <DialogDescription>
                                        The title will be edited.
                                    </DialogDescription>
                                    <DialogBody>
                                        <Field>
                                            <Label>Text</Label>
                                            <Input type="text" id="text" placeholder={item.text} />
                                        </Field>
                                    </DialogBody>
                                    <DialogActions>
                                        <Button type="submit">Edit</Button>
                                        <Button plain color="emerald-300" onClick={handleOnEditCancelClick}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </section>
                            </form>
                        </Dialog>
                    </>
                ) : null}


                {message ? (
                    <>
                        <form className="flex flex-col items-center" onSubmit={handleOnSentMessage}>

                            <Field>
                                <Label htmlFor="text" className="text-xs" >Write a message:</Label>
                                <Textarea type="text" id="text"  ></Textarea>
                            </Field>

                            <div className="flex justify-between h-4 items-center my-6 m-2">

                                <Button className="btn w-33% sm:w-auto justify-items-start" plain color="white" onClick={handleOnToggleMessageOut}>
                                    <ArrowUturnLeftIcon />
                                </Button>

                                <Button type="submit" className="btn w-33% sm:w-auto justify-items-start" plain color="white">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </>
                ) : null}


                <div className="flex flex-wrap justify-between mt-2 gap-2">
                    <time className=" sm:w-auto text-xs">{itemDate}</time>

                    {!item.own && (
                        <Button className="btn w-33% sm:w-auto" plain color="white" type="button" onClick={handleOnToggleMessageClick}>
                            <EnvelopeIcon />
                        </Button>
                    )}

                    {item.own && (
                        <Button className="btn w-33% sm:w-auto" plain color="white" type="button" onClick={handleOnDeleteClick}>
                            <TrashIcon />
                        </Button>
                    )}

                    {item.own && (
                        <Button className="btn w-33% sm:w-auto" plain color="white" type="button" onClick={handleOnEditClick}>
                            <PencilSquareIcon />
                        </Button>
                    )}
                    <Button className="btn w-33% sm:w-auto" color={item.fav ? 'red' : 'white'} type="button" onClick={handleToggleFavClick}>
                        <HeartIcon />
                    </Button>
                </div>
            </a>
        </article>

    )
}

export default Item
