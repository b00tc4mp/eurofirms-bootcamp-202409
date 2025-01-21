import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { useState, useEffect } from 'react'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import getUserName from '../logic/getUserName'
import getUser from '../logic/getUser'
import editUserData from '../logic/editUserData'


function UserProfile(props) {
    console.log('UserProfile rendering')

    const [user, setUser] = useState(null)
    const [userName, setUserName] = useState(null)

    const handleError = error => {
        if (error instanceof NotFoundError)
            alert(error.message)
        else if (error instanceof SystemError)
            alert('Sorry, there was a problem. Try again later.')

        console.error(error)

    }

    useEffect(() => {

        getUser()
            .then(user => setUser(user))
            .catch(error => handleError(error))

        getUserName()
            .then(userName => setUserName(userName))
            .catch(error => handleError(error))
    }, [])

    console.log('User Profile -> state: user = ' + name)

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

                        // setUser(user)
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

    return (
        <>
            <header className="w-full flex justify-between items-center px-2 h-24 z-10">
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
                <section className="flex justify-start">
                    {userName ? <h3 className="font-semibold text-gray-500 text-sm gap-2">{userName}</h3> : null}
                </section>

                <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                    <ArrowUturnLeftIcon />
                </Button>
            </header>
            <main>
                <div className="py-2 flex flex-col items-center justify-center">
                    <div className="text-center w-full p-2 max-w-lg">
                        <h2 className="font-semibold  text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">You can change your personal data</h2>
                        <div className="mx-auto w-[40%] flex-items-center max-w-screen-xl px-6 py-4 sm:px-3 sm:py-0 lg:max-w-screen-xl lg:px-6"></div>
                        {user && <form className="p-3 text-left" onSubmit={handleOnEditUserData}  >
                            <Fieldset>
                                <FieldGroup>
                                    <Field>
                                        <Label htmlFor="name" name="name">Name</Label>
                                        <Input type="text" id="name" name="name" defaultValue={name} />
                                    </Field>
                                    <Field>
                                        <Label htmlFor="location" name="location">Location</Label>
                                        <Input type="text" id="location" name="location" defaultValue={user.location} />
                                    </Field>
                                    <Field>
                                        <Label htmlFor="email" name="email">Email</Label>
                                        <Input type="email" id="email" name="email" defaultValue={user.email} />
                                    </Field>
                                    <Field>
                                        <Label htmlFor="username" name="username">Username</Label>
                                        <Input type="text" id="username" name="username" defaultValue={user.username} />
                                    </Field>
                                    <Field>
                                        <Label htmlFor="password" name="password">Password</Label>
                                        <Input type="password" id="password" name="password" />
                                    </Field>
                                </FieldGroup>
                            </Fieldset>
                            <Button className="my-6 text-xs" color="emerald" type="submit"  >
                                Edit</Button>
                        </form>
                        }
                    </div>
                </div>
            </main >
        </>
    )
}

export default UserProfile
