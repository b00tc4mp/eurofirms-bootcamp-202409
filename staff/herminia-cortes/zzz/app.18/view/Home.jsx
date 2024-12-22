const useState = React.useState
const useEffect = React.useEffect

function Home(props) {
    console.log('HomeView -> render')

    /*
    prop -> { onLogout }
    */

    const nameState = useState(null)
    const name = nameState[0]
    const setName = nameState[1]

    const postsState = useState([])
    const posts = postsState[0]
    const setPosts = postsState[1]

    console.log('Homeview -> state: name =' + name)

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
        <h2>Home</h2>

        {name && <h3>Hello, {name}!</h3>}

        <button type="button" onClick={() => {
            try {
                logoutUser()

                props.onLogout()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>Logout</button>

        <butoon type="button" onClick={() => props.onCreatePost()}>+</butoon>

        {posts.length && <section>
            {posts.map(post =>
                <article>
                    <h3>{post.author}</h3>
                    <img src={post.image} />
                    <p>{post.text}</p>
                    <time>{post.date}</time>

                    {post.own && <button type="button" onClick={() => {
                        if (confirm('Delete post?'))
                            try {
                                deletePost(post.id)
                                    .then(() => {
                                        getPosts()
                                            .then(posts => setPosts(posts))
                                            .catch(error => {
                                                alert(error.message)

                                                console.error(error)
                                            })
                                    })
                                    .catch(error => {
                                        alert(error.message)

                                        console.error(error)
                                    })
                            } catch (error) {
                                alert(error.message)

                                console.error(error)
                            }
                    }}></button>}
                </article>
            )}
        </section>}
    </main>
}
                


