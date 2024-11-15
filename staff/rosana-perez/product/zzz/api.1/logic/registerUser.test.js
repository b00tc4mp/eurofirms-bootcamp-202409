import registerUser from './registerUser.js'

try {
registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')
}catch(error){
    console.log(error)
}