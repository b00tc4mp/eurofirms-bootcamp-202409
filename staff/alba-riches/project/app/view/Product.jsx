import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteProduct from '../logic/deleteProduct'

function Product(props) {
    console.log('Product -> render')

    const product = props.product

    return <article className="bg-white p-2 my-4">
        <h3 className="font-bold">{product.author}</h3>

        <div className="flex justify-center">
            <img src={product.image} />
        </div>

        <p>{product.text}</p>

        <div className="flex justify-between">
            <time className="text-xs">{new Date(product.date).toDateString()}</time>

            {product.own && <button type="button" onClick={() => {
                if (confirm('Delete product?'))
                    try {
                        deleteProduct(product.id)
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
        </div>
    </article>
}

export default Product
