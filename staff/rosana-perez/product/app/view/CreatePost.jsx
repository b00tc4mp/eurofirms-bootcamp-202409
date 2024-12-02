import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import createPost from '../logic/createPost'

function CreatePost(props) {
    console.log('CreatePost -> render')

    return <main className="p-20">
        <h2 className="text-3xl h-12">Create Post</h2>

        <form className="flex flex-col gap-3" onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const image = form.image.value
            const text = form.text.value

            try {
                createPost(image, text)
                    .then(() => props.onCreated())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.SystemError.name, message: error.message })
            }
        }}>
            <label htmlFor='image'>Image</label>
            <input className="border-2 border-black px-2" type="url" id="image" />

            <label htmlFor="text">Text</label>
            <input className="border-2 border-black px-2" type="text" id="text" />

            <button className="bg-black text-white" type="submit">Create</button>

            <button className="underline text-left" type="button" onClick={() => { props.onExit(); }}>Exit</button>

        </form>
    </main >
}

export default CreatePost