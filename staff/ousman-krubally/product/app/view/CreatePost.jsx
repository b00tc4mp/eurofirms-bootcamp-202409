import createPost from '../logic/createPost'

function CreatePost(props) {
    console.log('CreatePost -> render')

    return <main>
        <h2>create Post</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const image = form.image.value
            const text = form.text.value

            try {
                createPost(image, text)

                props.onCreated()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <label htmlFor="image">image</label>
            <input type="url" id="image" />

            <label htmlfor="text">Text</label>
            <input type="text" id="text" />

            <button type="submit">Create</button>
        </form>
    </main>
}

export default CreatePost