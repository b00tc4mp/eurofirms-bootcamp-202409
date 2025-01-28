import { Text } from '../components/text.jsx'

import getLoggedInUserId from '../logic/getLogggedInUserId.js'

function Message({ from, content, date, senderId }) {
    console.log('Message rendering')

    const fromUser = senderId === getLoggedInUserId()

    return (
        <article className={`message ${fromUser ? 'sent' : 'received'}`}>
            <a key={date} href="#" className="group block">
                <div className="flex w-full items-center gap-2">
                    <Text>{content}</Text>
                </div>
                <div className="flex w-full items-center gap-2">
                    <span className="text-sm">{from}</span>
                    <span>{date}</span>
                </div>
            </a>
        </article>
    )
}

export default Message