function Message({ from, content, date }) {
    console.log('Message rendering')


    //compare from with userId, -> return message left or right, verifying
    //getUserId -> userId(front-end)
    return (
        <p>{content} ({date})</p>
    )
}

export default Message