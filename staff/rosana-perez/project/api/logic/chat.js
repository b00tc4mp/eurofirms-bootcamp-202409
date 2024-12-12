import { User, Item, Message } from '../data/models.js'
import { validate, errors } from 'com'

//import nodemailer from 'nodemailer'

const { SystemError, NotFoundError, OwnershipError, DuplicityError } = errors


function chat(itemId, userId, content) {
    validate.itemId(itemId)
    validate.userId(userId)
    validate.content(content)


    return Promise.all([
        User.findById(userId),
        Item.findById(itemId),

    ])
        .then(dataToChat => {

            const [user, item] = dataToChat

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            const messageRef = item._id
            const senderId = userId
            const receiverId = item.author

            if (receiverId === senderId) throw new OwnershipError('user is author of item')

            return Message.findOne({ messageRef, senderId, receiverId, content })
                .then((existsMessage) => {
                    if (existsMessage) throw new DuplicityError('message duplicated');


                    return Message.create({ messageRef, senderId, receiverId, content })
                })

            //const emailSharer = sharer.email.toString()

            //const emailUser = targetUserId.email.toString()
            // const passwordUser = targetUserId.password.toString()

            /* function sendMail(req, res) {
         
                 const transporter = nodemailer.createTransport({
                     service: 'gmail',
                     auth: {
                         user: emailUser,
                         pass: passwordUser,
                     }
                 });
                 const mailOptions = {
                     from: emailUser,
                     to: emailSharer,
                     subject: item.text,
                     text: "I'm interested in your add, please contact me. Thanks."
                 };
         
                 transporter.sendMail(mailOptions, (error, info) => {
                     if (error) {
                         return res.status(500).send(error.toString());
                     }
                     res.status(200).send('Mail sent succesfully ' + info.response);
                 })
             }*/
        })
        .catch(error => { throw new SystemError(error.message) })

        .then(_ => { })
}


export default chat

