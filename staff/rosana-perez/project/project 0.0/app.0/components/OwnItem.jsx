import { errors, util } from 'com'

import { Button } from '../components/button.jsx'
import { Input } from '../components/input.jsx'
import { Text } from '../components/text.jsx'
import { Field, Label } from '/components/fieldset'
import { Dialog, DialogActions, DialogBody } from '../components/dialog.jsx'
import { PencilSquareIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError } = errors

import deleteItem from '../logic/deleteItem.js'
import toggleSoldItem from '../logic/toggleSoldItem.js'
import editItem from '../logic/editItem.js'

import { useState } from 'react'

function OwnItem(props) {
    console.log('OwnItems rendering')

    const [edit, setEdit] = useState(false)

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

    const [isOpen, setIsOpen] = useState(false)

    const { id: itemId, location, image, title, description, sold, updatedAt } = props.item
    const itemDate = util.formatIsoDate(updatedAt)

    const handleOnEditItemSubmit = event => {
        event.preventDefault()

        const form = event.target
        const titleInput = form.title
        const newTitle = titleInput.value

        try {
            editItem(itemId, newTitle)
                .then(() => {
                    setIsOpen(false)
                    props.onEditItem()
                })
                .catch(error => { handleError(error) })

        } catch (error) { handleError(error) }
    }

    const handleOnEditClick = () => {
        setEdit(true)
        setIsOpen(true)
    }

    const handleOnEditCancelClick = () => setIsOpen(false)

    const handleOnDeleteClick = () => {
        if (confirm('Delete item?')) {
            try {
                deleteItem(itemId)
                    .then(() => props.onDeleted())
                    .catch(error => handleError(error))

            } catch (error) { handleError(error) }
        }
    }
    const handleOnItemSold = () => {
        try {
            toggleSoldItem(itemId)
                .then(() => {
                    props.onToggleSold()
                })
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }


    return (

        <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <a key={itemId} href="#" className="group block">
                <img
                    alt="Product image"
                    src={image}
                    className="object-cover w-full h-40 object-center rounded-lg group-hover:opacity-75"
                />
                <section>
                    <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                        <p>{location}</p>
                    </div>
                    <p className="mt-1 flex items-start text-lg font-medium text-gray-900">{title}</p>
                    <Text className="mt-1 flex items-start text-sm font-medium">{description}</Text>
                </section>

                <div className="mt-4 flex flex-wrap justify-between gap-2">
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
                                fill={sold ? '#60a5fa' : 'white'}
                                stroke={sold ? '#60a5fa' : '#71717a'}
                            />
                        </Button>
                    </>
                    {edit && (
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                            <form className="flex flex-col items-center" onSubmit={handleOnEditItemSubmit}>
                                <section>
                                    <DialogBody>
                                        <Field>
                                            <Label>New title</Label>
                                            <Input type="text" id="title" name="title" placeholder={title} />
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
                    <div className="sm:w-auto text-xs">{itemDate}</div>
                </div>
            </a>
        </article>
    )
}

export default OwnItem