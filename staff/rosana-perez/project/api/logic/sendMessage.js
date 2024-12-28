import { User, Item, Message } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function sendMessage(userId, itemId, recipientId, content) {
    console.log(userId)
    validate.userId(userId)
    validate.itemId(itemId)
    validate.recipientId(recipientId)
    validate.content(content)


    return Promise.all([

        User.findById(userId),
        Item.findById(itemId).populate('_id'),
        User.findById(recipientId)

    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(([user, item, recipient]) => {

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')
            if (!recipient) throw new NotFoundError('recipient not found')

            const message = new Message({
                sender: user._id,
                item: item._id,
                recipient: recipient._id,
                content
            })

            return message.save()

        })

}

export default sendMessage


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