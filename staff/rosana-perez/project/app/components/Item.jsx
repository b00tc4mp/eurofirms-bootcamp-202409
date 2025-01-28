import { errors, util } from 'com'

import { Button } from '../components/button'
import { Textarea } from '../components/textarea'
import { Field, Label } from '/components/fieldset'
import { ArrowUturnLeftIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline'

const { ValidationError, SystemError, NotFoundError } = errors

import sendMessage from '../logic/sendMessage.js'
import toggleFavItem from '../logic/toggleFavItem.js'
import isUserLoggedIn from '../logic/isUserLoggedIn.js'

import { useState } from 'react'

function Item(props) {
    console.log('Item rendering')

    const [message, setMessage] = useState(false)

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

    const userLoggedIn = isUserLoggedIn()

    const { id: itemId, author, location, image, title, sold, own, fav, updatedAt } = props.item || {}
    const itemDate = util.formatIsoDate(updatedAt)

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
                        props.onMessageSent()
                    })
                    .catch(error => { handleError(error) })

            } catch (error) { handleError(error) }
        }
    }

    const handleOnMessageClick = () => { toggleMessage(true) }

    const handleOnMessageExit = () => { toggleMessage(false) }

    const handleToggleFavClick = () => {
        try {
            toggleFavItem(itemId)
                .then(() => {
                    props.onToggleFavClick()
                })
                .catch(error => handleError(error))

        } catch (error) { handleError(error) }
    }

    const handleItemDownload = (itemId) => {

        props.onItemDownload(itemId)
    }

    return (
        !sold ? (
            props.item && ( //item.sold[false]
                <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                    <a key={itemId} href="#" className="group block">
                        <img
                            alt="Product image"
                            src={image}
                            onClick={() => handleItemDownload(itemId)}
                            className="object-cover w-full h-40 object-center rounded-lg group-hover:opacity-75"
                        />
                        <section>
                            <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                                <h3>{author?.username}</h3>
                                <p>{location}</p>
                            </div>

                            <p className="mt-1 flex items-start text-lg font-medium text-gray-900">{title}</p>
                            {/* <Text className="mt-1 flex items-start text-sm font-medium">{description}</Text> */}

                        </section>
                        {userLoggedIn && (
                            <div className="mt-4 flex flex-wrap justify-between gap-2">
                                {!own && (
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
                                                fill={fav ? '#b91c1c' : 'white'}
                                                stroke={fav ? '#b91c1c' : '#71717a'}
                                            />
                                        </Button>
                                    </>
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
                                <div className="sm:w-auto flex items-center text-xs">{itemDate}</div>
                            </div>
                        )}
                    </a>
                </article>
            )) : (//item.sold[true]
            userLoggedIn && (
                props.item && (
                    !own ? ( // item.sold[true] && item.own[false]
                        <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 opacity-50">
                            <a key={itemId} href="#" className="group block">
                                <img
                                    alt="Product image"
                                    src={image}
                                    className="object-cover w-full h-40 object-center rounded-lg group-hover:opacity-50"
                                />
                                <div className="overlay">
                                    <span className="overlay-text">Item Not Available</span>
                                </div> {/* item.sold[true] + userLoggedIn[true] + user not author of item */}
                                <section>
                                    <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                                        <h3>{author?.username}</h3>
                                        <p>{location}</p>
                                    </div>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
                                    {/*  <Text className="mt-1 text-sm font-medium">{description}</Text> */}
                                </section>
                            </a>
                        </article>
                    ) : (// item.sold[true] && item.own[true]
                        <article className="bg-white container-fluid w-100 h-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 ">
                            <a key={itemId} href="#" className="group block">
                                <img
                                    alt="Product image"
                                    src={image}
                                    className="object-cover w-full h-40 object-center rounded-lg group-hover:opacity-50"
                                />{/* item.sold[true] + userLoggedIn[true] + user is author of item */}
                                <section>
                                    <div className="flex justify-between items-start m-1 text-xs text-[#4B5563]">
                                        <p>{location}</p>
                                    </div>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
                                    {/*    <Text className="mt-1 text-sm font-medium">{description}</Text> */}
                                </section>
                            </a>
                        </article>
                    )))
        ))
}

export default Item