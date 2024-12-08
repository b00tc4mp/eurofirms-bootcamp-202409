import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Post from './Post'

import getUserName from '../logic/getUserName'
import getPosts from '../logic/getPosts'
import logoutUser from '../logic/logoutUser'

function Home(props) {
    console.log('Home -> render')

    /*
    props -> { onLogout }
    */

    // const nameState = useState(null)
    // const name = nameState[0]
    // const setName = nameState[1]
    const [name, setName] = useState(null)

    // const postsState = useState([])
    // const posts = postsState[0]
    // const setPosts = postsState[1]
    const [posts, setPosts] = useState([])

    console.log('Home -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('sorry, there was a problem. try again later.')

                    console.error(error)
                })

            getPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    if (error instanceof NotFoundError)
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
    }, [])

    return <main>
        <div className="home-top">
            {name && <h3>{name}</h3>}

            <div>
                <button type="button" onClick={() => props.onCreatePost()}>+</button>

                <button type="button" onClick={() => {
                    try {
                        logoutUser()

                        props.onLogout()
                    } catch (error) {
                        alert(error.message)

                        console.error(error)
                    }
                }}>🚪</button>
            </div>
        </div>



        {<section>
            {posts.map(post => <Post key={post.id} post={post} onDeleted={() => {
                try {
                    getPosts()
                        .then(posts => setPosts(posts))
                        .catch(error => {
                            if (error instanceof NotFoundError)
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

                    console.log(error)
                }
            }} />)}
        </section>}
    </main>
}

export default Home