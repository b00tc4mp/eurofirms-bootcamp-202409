import { errors, util } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import { Text } from '../components/text.jsx'

import getChat from '../logic/getChat.js'
import getLoggedInUserId from '../logic/getLogggedInUserId.js'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Chat({ chatId }) {
    console.log('Chat rendering')

    const [chat, setChat] = useState(null)
    const [timestamp, setTimeStamp] = useState(Date.now())
    const userId = getLoggedInUserId()

    const navigate = useNavigate()

    const handleError = (error) => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        } else if (error instanceof ValidationError) {
            alert(error.message)
        } else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        } else {
            alert('Sorry, there was a problem. Try again later.')
        }
        console.error(error)
    }

    useEffect(() => {
        getChat(chatId)
            .then(chat => setChat(chat))
            .catch(error => handleError(error))
    }, [timestamp])

    useEffect(() => {
        setTimeout(() => {
            setTimeStamp(Date.now())
        }, 5000)

    }, [timestamp])

    const itemImage = chat?.item.image
    const itemTitle = chat?.item.title
    const itemId = chat?.item.id

    const receiverUser = chat?.users.find(user => user.id !== userId)

    const lastMessage = chat?.messages[chat.messages.length - 1]
    const messageDate = util.formatIsoDate(lastMessage?.updatedAt)

    const handleItemDownload = () => {

        navigate("/article", { state: { itemData: itemId } })
    }

    return (
        <article>
            {chat ? (
                <div>
                    <div className="group/f0df7a36 flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-2xl px-3 py-3 hover:bg-neutral-50 active:bg-neutral-100">
                        <div className="group/bec25ae6 bg-orange-100 relative flex h-12 w-12 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg">
                            <img
                                alt="chat item"
                                src={itemImage}
                                onClick={handleItemDownload}
                                className="absolute h-12 w-12 flex-none object-cover" />
                        </div>
                        <div className="flex shrink-0 grow basis-0 flex-col items-start">
                            <div className="flex w-full items-center gap-2">
                                <span className="text-sm">{receiverUser.username}</span>
                                <span>{messageDate}</span>
                            </div>
                            <div className="flex w-full items-center gap-2">
                                <span className="font-semibold tracking-tight">{itemTitle}</span>
                            </div>
                            <div className="flex w-full items-center gap-2">
                                <Text>{lastMessage?.content}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No messages or chat found</p>
            )}
        </article>
    )
}

export default Chat