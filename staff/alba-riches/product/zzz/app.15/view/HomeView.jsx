const useState = React.useState
const useEffect = React.useEffect

function HomeView(props) {
    console.log('HomeView -> render')

    /*
    props -> { onLogout }
    */

    const nameState = useState(null)
    const name = nameState[0]
    const setName = nameState[1]

    const postsState = useState([])
    const posts = postsState[0]
    const setPosts = postsState[1]

    console.log('HomeView -> state: name = ' + name)

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

        <button onClick={function () {
            try {
                logoutUser()

                props.onLogout()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>Logout</button>

        {posts.length && <section>
            {posts.map(post =>
                <article>
                    <h3>{post.author}</h3>
                    <img src={post.image} />
                    <p>{post.text}</p>
                    <time>{post.date}</time>
                </article>
            )}
        </section>}
    </main>
}