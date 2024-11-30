import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deletePost from '../logic/deletePost'

import './Post.css'

function Post(props) {
    console.log('Post -> render')

    const post = props.post

    return <article>
        <h3>{post.author}</h3>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>
        <time>{post.date}</time>

        {post.own && <button type="button" onClick={() => {
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
        }}>🗑️</button>}
    </article>
}

export default Post