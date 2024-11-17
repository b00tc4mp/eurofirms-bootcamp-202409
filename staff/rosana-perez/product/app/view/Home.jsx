import { useState, useEffect } from 'react'

import Post from './Post'

import getUserName from '../logic/getUserName'
import getPosts from '../logic/getPosts'
import logoutUser from '../logic/logoutUser'

import './Home.css'

function Home(props) {
    console.log('Home -> render')

    //props -> {onLogout}

    /*const nameState = useState(null)
      const name = nameState[0]
      const setName = nameState[1] */
    const [name, setName] = useState(null) // desestructuración del array

    /* const postsState = useState([])
       const posts = postsState[0]
       const setPosts = postsState[1] */
    const [posts, setPosts] = useState([])


    console.log('Home -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message)

                    console.error(error)

                })

            getPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

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


        {posts.length && <section>
            {posts.map(post => <Post key={post.id} post={post} onDeleted={() => {
                try {
                    getPosts()
                        .then(posts => setPosts(posts))
                        .catch(error => {
                            alert(error.message)

                            console.error(error)
                        })
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }} />)}
        </section>}
    </main>
}

export default Home