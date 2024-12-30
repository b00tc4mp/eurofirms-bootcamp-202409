import { errors, formatIsoDate } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import getMessagesIn from '../logic/getMessagesIn'
import getMessagesOut from '../logic/getMessagesOut'

import { useState, useEffect } from 'react'

function Message(props) {
    console.log('Message rendering')

    const [messageIn, setMessageIn] = useState(false)
    const [messageOut, setMessageOut] = useState(false)

    const handleError = (error) => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        } else if (error instanceof ValidationError) {
            alert(error.message)
        } else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        console.error(error)
    }



}