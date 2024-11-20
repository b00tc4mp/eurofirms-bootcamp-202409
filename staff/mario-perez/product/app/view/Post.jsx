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
                            alert(error.message)

                            console.error(error)
                        })
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
        }}>🗑️</button>}
    </article>
}

export default Post