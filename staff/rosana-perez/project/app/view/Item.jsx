import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteItem from '../logic/deleteItem'
import editItem from '../logic/editItem'
import { useState } from 'react'

function Item(props) {
    console.log('Item rendering')

    const [edit, setEdit] = useState(false)

    const item = props.item
    const text = item.text
    const description = item.description

    function toggleEdit(state) {
        setEdit(state)
    }

    return <article className="bg-white p-4 my-4">
        <h3 className="font-bold">{item.author}</h3>

        <img className="w-full flex justify-center" src={item.image} />


        <div>
            <p>{text}</p>
            <p className="text-xs">{description}</p>
        </div>


        {edit ? <> <form className=" flex flex-col items-center" onSubmit={event => {
            event.preventDefault()

            const form = event.target
            const textInput = form.text
            const text = textInput.value



            console.log('item id _> ', item.id, 'text -> ', text)

            try {
                if (confirm('Edit Item?'))
                    editItem(item.id, text)
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
        }}>
            <Input className="p-4 text-emerald-300 text-sm" type="text" id="text" placeholder={text} />

            <div className="flex justify-between h-4 items-center my-6 m-2" >
                <Input className="m-2" type="submit" value={'edit text'} />
                <Button color="emerald" onClick={() => {
                    toggleEdit(false)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                </Button>
            </div>



        </form> </> : <p></p>
        }

        <div className="flex justify-between mt-2">
            <time className="text-xs">{new Date(item.date).toDateString()}</time>

            {item.own && <Button color="emerald" type="button" onClick={() => {
                if (confirm('Delete item?'))
                    try {
                        deleteItem(item.id)
                            .then(() => props.onDeleted())
                            .catch(error => {
                                if (error instanceof NotFoundError)
                                    alert(error.message)
                                else if (error instanceof OwnershipError)
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
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


            </Button>}

            {item.own && (<Button color="emerald" type="button" onClick={() => {
                toggleEdit(true)
            }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </Button>
            )}
        </div>
    </article >
}

export default Item

