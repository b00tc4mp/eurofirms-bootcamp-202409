function CreatePost(props) {
     console.log('CreatePost -> render')
     
     return <main>
        <h2>Create Post</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const image = form.image.value
            const text = form.text.value

            try {
                CreatePost(image, text)

                props.onCreated()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
       }}>
           <label htmlFor="image">Image</label>
           <input type="irl" id="image" />

           <label htmlFor="text">Text</label>
           <input type="text" id="text" />

           <button type="submit">Create</button>
       </form>
     </main>
}