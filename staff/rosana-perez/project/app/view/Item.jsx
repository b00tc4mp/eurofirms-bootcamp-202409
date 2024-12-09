import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteItem from '../logic/deleteItem'

function Item(props) {
    console.log('Item rendering')

    const item = props.item

    return <article>
        <h3>{item.author}</h3>

        <div>
            <img src={item.image} />
        </div>

        <p>{item.text}</p>

        <div>
            <time>{new Date(item.date).toDateString()}</time>

            {item.own && <button type="button" onClick={() => {
                if (confirm('Delete item?'))
                    try {
                        deleteItem(item.id)
                            .then(() => props.onDeleted())
                            .catch(error => {
                                if (error instanceof NotFoundError)
                                    alert(error.message)
                                else if (error instanceof OwnershipError)
                                    alert(error.message)
                                else if (error instanceof SystemError)
                                    alert('Sorry, there was a problem. Try again later.')

                                console.error(error)
                            })
                    } catch (error) {
                        if (error instanceof ValidationError)
                            alert(error.message)
                        else
                            alert('Sorry, there was a problem. Try again later.')

                        console.error(error)
                    }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


            </button>}

        </div>

    </article>
}

export default Item