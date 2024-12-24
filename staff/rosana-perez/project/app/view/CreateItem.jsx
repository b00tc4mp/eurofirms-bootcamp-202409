/* import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from 'react'

const { ValidationError, SystemError, NotFoundError } = errors

import createItem from '../logic/createItem'
import getUserName from '../logic/getUserName'


function CreateItem(props) {
    console.log('CreateItem rendering')

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            getUserName()
                .then((user) => {
                    console.log(user)
                    setUser(user)
                })
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

            console.error(error)
        }
    }, [])

    const handleOnCancelClick = () => props.onCancelClick()

    const [formData, setFormData] = useState({ location: '' })

    const handleChange = (event) => {

        const { value } = event.target //accede a su valor

        setFormData((prevState) => ({
            ...prevState,
            location: value // se actualiza el codigo con la location
        }))
    }

    const handleCreateItemSubmit = event => {
        event.preventDefault()

        const form = event.target

        const location = formData.location
        const image = form.image.value
        const title = form.title.value
        const description = form.description.value
        console.log(location)
        try {
            createItem(location, image, title, description)

                .then(() => { props.onCreated() })

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

    return (
        <>
            <header className="w-full bg-emerald-400 display flex justify-between items-center px-2 h-12 ">
                <section className="w-full flex justify-between">
                    {user && <h3 className="text-gray-700 flex justify-center font-bold gap-2 ">{user.name}</h3>}
                </section>
                <section>
                    <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                        <ArrowUturnLeftIcon />
                    </Button>
                </section>{}
            </header>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center w-full p-8 max-w-lg ">
                    <h2 className="font-bold text-emerald-700">Create Item</h2>

                    <form className="my-10 text-left" onSubmit={handleCreateItemSubmit}>
                        <Fieldset>
                            <FieldGroup>
                                <Field>
                                    <div className="input-with-select w-full" >
                                        <Label htmlFor="location" name="location" >Select Location</Label>
                                        <select
                                            name="city"
                                            id="city"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="select-dropdown bg-gray-100">
                                            <option value="A Coruña">A Coruña</option>
                                            <option value="Lugo">Lugo</option>
                                            <option value="Ourense">Ourense</option>
                                            <option value="Pontevedra">Pontevedra</option>
                                            <option value="Vigo">Vigo</option>
                                            <option value="Ferrol">Ferrol</option>
                                            <option value="Santiago de Compostela">Santiago de Compostela</option>
                                            <option value="A Estrada">A Estrada</option>
                                            <option value="Ribeira">Ribeira</option>
                                            <option value="Betanzos">Betanzos</option>
                                            <option value="Vilagarcía de Arousa">Vilagarcía de Arousa</option>
                                            <option value="Monforte de Lemos">Monforte de Lemos</option>
                                            <option value="Cee">Cee</option>
                                            <option value="Padrón">Padrón</option>
                                            <option value="Carballo">Carballo</option>
                                            <option value="Lalín">Lalín</option>
                                            <option value="O Grove">O Grove</option>
                                            <option value="Vilanova de Arousa">Vilanova de Arousa</option>
                                            <option value="Camariñas">Camariñas</option>
                                            <option value="Sarria">Sarria</option>
                                        </select>
                                    </div>
                                </Field>

                                <Field>
                                    <Label htmlFor="image" name="image">Image</Label>
                                    <Input className="text-xs" type="url" id="image" placeholder="Put the image link here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="title" name="title" >Title</Label>
                                    <Input className="text-xs" type="text" id="title" placeholder="Write a title here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="description" name="description">Description</Label>
                                    <Textarea className="text-xs" maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>
                                </Field>

                            </FieldGroup>
                        </Fieldset>

                        <Button color="white" className="my-6 text-xs text-emerald-800 font-bold bg-emerald-300" type="submit">Create</Button>

                    </form>
                </div>
            </main >
        </>)
}

export default CreateItem */

import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import createItem from '../logic/createItem'
import getUserName from '../logic/getUserName'

const { ValidationError, SystemError, NotFoundError } = errors

function CreateItem(props) {
    console.log('CreateItem rendering')

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            getUserName()
                .then((user) => {
                    console.log(user)
                    setUser(user)
                })
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

            console.error(error)
        }
    }, [])

    const handleOnCancelClick = () => props.onCancelClick()

    const [formData, setFormData] = useState({ location: '' })

    const handleChange = (event) => {
        const { value } = event.target //accede a su valor

        console.log('Location selected:', value) // Verifica el valor seleccionado
        setFormData((prevState) => ({
            ...prevState,
            location: value // actualiza el estado con la nueva location
        }))
    }

    const handleCreateItemSubmit = event => {
        event.preventDefault()

        const form = event.target

        const location = formData.location
        const image = form.image.value
        const title = form.title.value
        const description = form.description.value

        console.log('Form data on submit:', { location, image, title, description }) // Verifica los valores antes de enviarlos

        try {
            createItem(location, image, title, description)
                .then(() => { props.onCreated() })
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

    return (
        <>
            <header className="w-full bg-emerald-400 display flex justify-between items-center px-2 h-12">
                <section className="w-full flex justify-between">
                    {user && <h3 className="text-gray-700 flex justify-center font-bold gap-2">{user.name}</h3>}
                </section>
                <section>
                    <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                        <ArrowUturnLeftIcon />
                    </Button>
                </section>
            </header>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center w-full p-8 max-w-lg">
                    <h2 className="font-bold text-emerald-700">Create Item</h2>

                    <form className="my-10 text-left" onSubmit={handleCreateItemSubmit}>
                        <Fieldset>
                            <FieldGroup>
                                <Field>
                                    <div className="input-with-select w-full">
                                        <Label htmlFor="location" name="location">Select Location</Label>
                                        <select
                                            name="city"
                                            id="city"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="select-dropdown bg-gray-100">
                                            <option value="A Coruña">A Coruna</option>
                                            <option value="Lugo">Lugo</option>
                                            <option value="Ourense">Ourense</option>
                                            <option value="Pontevedra">Pontevedra</option>
                                            <option value="Vigo">Vigo</option>
                                            <option value="Ferrol">Ferrol</option>
                                            <option value="Santiago de Compostela">Santiago de Compostela</option>
                                            <option value="A Estrada">A Estrada</option>
                                            <option value="Ribeira">Ribeira</option>
                                            <option value="Betanzos">Betanzos</option>
                                            <option value="Vilagarcía de Arousa">Vilagarcía de Arousa</option>
                                            <option value="Monforte de Lemos">Monforte de Lemos</option>
                                            <option value="Cee">Cee</option>
                                            <option value="Padrón">Padrón</option>
                                            <option value="Carballo">Carballo</option>
                                            <option value="Lalín">Lalín</option>
                                            <option value="O Grove">O Grove</option>
                                            <option value="Vilanova de Arousa">Vilanova de Arousa</option>
                                            <option value="Camariñas">Camarinas</option>
                                            <option value="Sarria">Sarria</option>
                                        </select>
                                    </div>
                                </Field>

                                <Field>
                                    <Label htmlFor="image" name="image">Image</Label>
                                    <Input className="text-xs" type="url" id="image" placeholder="Put the image link here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="title" name="title">Title</Label>
                                    <Input className="text-xs" type="text" id="title" placeholder="Write a title here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="description" name="description">Description</Label>
                                    <Textarea className="text-xs" maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>
                                </Field>

                            </FieldGroup>
                        </Fieldset>

                        <Button color="white" className="my-6 text-xs text-emerald-800 font-bold bg-emerald-300" type="submit">Create</Button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CreateItem
