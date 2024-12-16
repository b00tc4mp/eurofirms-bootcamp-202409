import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deletePost from '../logic/deletePost'
import modifyPostText from '../logic/modifyPostText'
import { useState } from 'react'

function Post(props) {
    console.log('Post -> render')

    const [edit, setEdit] = useState(false)//estado  para saber si  estamos  editando el post

    const post = props.post
    const text = post.text

    function toggleEdit(state) {
        setEdit(state)
    }

    const handlePostEdit = event => {
        event.preventDefault()

        const form = event.target

        const textInput = form.text

        const text = textInput.value

        console.log('post id -> ', post.id, 'text-> ', text)

        try {
            if (confirm('edit post?'))
                modifyPostText(post.id, text)
                    .then(() => {
                        toggleEdit(false)
                        props.onEdit()
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

    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            try {
                deletePost(post.id)
                    .then(() => props.onDeleted())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        if (error instanceof OwnershipError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('sorry, there was a problem. try again later')

                console.error(error)
            }
    }


    return <article className="bg-white p-2 my-4">
        <h3 className="font-bold">{post.author}</h3>
        <div className="flex justify-center">
            <img src={post.image} />
        </div>

        {edit ? <> <form className=" flex flex-col items-center" onSubmit={handlePostEdit}>
            <input className="border-2 border-black px-2" type="text" id='text' placeholder={text} />

            <div className="flex justify-between h-4 items-center my-6 m-2">
                <input className="m-2" type="submit" value={'edit post'} />

                <button className="p-2 bg-black text-white" onClick={() => toggleEdit(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </form> </> : <p>{text}</p>
        }

        <div className="flex justify-between">
            <time className="text-xs"> {new Date(post.date).toDateString()}</time>

            {post.own && <button type="button" onClick={handleDeleteClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </button>}


            {post.own && (<button type="button" onClick={() => {
                toggleEdit(true)
            }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>
            )}
        </div>
    </article >
}

export default Post
