import { errors } from 'com'
import { useState } from 'react'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deletePost from '../logic/deletePost'

function Post(props) {
    console.log('Post -> render')

    const post = props.post

    const [text, setText] = useState(post.text)
    const [isEditing, setIsEditing] = useState(false)

    // Maneja el cambio de texto
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    // Habilita el modo de edición
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // Deshabilita el modo de edición y guarda el texto
    const handleSaveClick = () => {
        setIsEditing(false);
    }

    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            try {
                deletePost(post.id)
                    .then(() => props.onDeleted())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof OwnershipError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('sorry, there was a problem. try again later.')

                console.error(error)
            }
    }

    return <article className="bg-white p-2 my-4">
        <h3 className="font-bold">{post.author}</h3>

        <div className="flex justify-center">
            <img src={post.image} />
        </div>

        <p>{post.text}</p>

        <div className="flex justify-between">
            <time className="text-xs">{new Date(post.date).toDateString()}</time>

            {post.own && <button type="button" onClick={handleDeleteClick}>🗑️</button>}
        </div>
    </article>
}

export default Post