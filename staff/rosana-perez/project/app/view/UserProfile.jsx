import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import Item from './Item'

import getUserName from '../logic/getUserName'
import getUser from '../logic/getUser'
import editUserData from '../logic/editUserData'
import getItems from '../logic/getItems'
import getMessages from '../logic/getMessages'


function UserProfile(props) {
    console.log('UserProfile rendering')

    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [items, setItems] = useState([])
    const [messages, setMessages] = useState([])

    // const messagesOwn = messages.some(message => (message.recipient.toString() || message.sender.toString()) === user?.id) TODO: logics in messages in, about the user's items

    useEffect(() => {

        getUser()
            .then(user => {
                setUser(user)
            })
            .catch(error => {
                if (error instanceof NotFoundError)
                    alert(error.message)
                else if (error instanceof SystemError)
                    alert('Sorry, there was a problem. Try again later.')

                console.error(error)
            })

        getUserName()
            .then(name => {
                setName(name)
            })
            .catch(error => {
                if (error instanceof NotFoundError)
                    alert(error.message)
                else if (error instanceof SystemError)
                    alert('Sorry, there was a problem. Try again later.')

                console.error(error)
            })
    }, [])

    console.log('User Profile -> state: user = ' + name)

    useEffect(() => {

        const itemOwn = items.some(item => item.author._id.toString() === user?.id)

        const messagesOwn = messages.some(message => message.sender.toString() === user?.id)

        if (user && itemOwn) {
            console.log('items own _> ', itemOwn)
            getItems()
                .then(items => setItems(items))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })
        }

        if (user && messagesOwn) { //if (user && messagesOut || messagesIn) {
            getMessages()
                .then(messages => setMessages(messages))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })
        }
    }, [user])

    const handleOnEditUserData = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const location = form.location.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        if (confirm('Edit Personal Data?')) {
            try {
                editUserData(name, location, email, username, password)
                    .then(() => {
                        props.onEditUserData()

                        setUser(user)
                    })
                    .catch(error => {
                        if (error instanceof SystemError)
                            alert('Sorry, there was a problem. Try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('Sorry, there was a problem. Try again later.')

                console.error(error)
            }
        }
    }


    const handleOnCancelClick = () => props.onCancelClick()


    return <>
        <header className="w-full bg-emerald-200 flex justify-between items-center px-2 h-24 z-10">
            <div className="flex lg:flex-1">
                <a href="#" className="m-1.5 p-1.5">
                    <span className="sr-only">Dona2</span>
                    <img
                        alt=""
                        src="/images/greenWorld.png"
                        className="h-12 w-auto"
                    />
                    <p className="px-3 py-2.5 flex justify-center font-semibold text-emerald-700">Dona2</p>
                </a>
            </div>
            {name ? <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">Hello, {name}!</h3> : null}
            <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                <ArrowUturnLeftIcon />
            </Button>
        </header>

        <main className="pt-4 my-6">
            <div className="mx-auto max-w-screen-xl px-6 py-10 sm:px-3 sm:py-0 lg:max-w-screen-xl lg:px-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">User Data</h2>
                {user && <form className="p-1 text-left" onSubmit={handleOnEditUserData}  >
                    <Fieldset>
                        <FieldGroup>
                            <Field>
                                <Label htmlFor="name" name="name">Name</Label>
                                <Input type="text" id="name" name="name" placeholder={name} />
                            </Field>
                            <Field>
                                <Label htmlFor="location" name="location">Location</Label>
                                <Input type="text" id="location" name="location" placeholder={user.location} />
                            </Field>
                            <Field>
                                <Label htmlFor="email" name="email">Email</Label>
                                <Input type="email" id="email" name="email" placeholder={user.email} />
                            </Field>
                            <Field>
                                <Label htmlFor="username" name="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder={user.username} />
                            </Field>
                            <Field>
                                <Label htmlFor="password" name="password">Password</Label>
                                <Input type="password" id="password" name="password" />
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                    <Button className="my-6 text-xs" color="emerald" type="submit"  >
                        Edit Personal Data</Button>
                </form>
                }

                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your items</h2>
                    {items.map(item => {
                        <Item
                            key={item._id}
                            location={item.location}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        >
                        </Item>
                    })}
                </section>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Messages sent</h2>

                    {messages.map(message => {
                        return (
                            <section key={message._id}>
                                <p>Item: {message.item}</p>
                                <p>Sender: {message.sender}</p>
                                <p>Recipient: {message.recipient}</p>
                                <p>Content: {message.content}</p>
                            </section>
                        )
                    })}
                </section>
            </div>
        </main >
    </>
}

export default UserProfile
