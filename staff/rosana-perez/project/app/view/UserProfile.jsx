import { errors } from 'com'

import getUser from '../logic/getUser'
import getItems from '../logic/getItems'
import getMessages from '../logic/getMessages'
import getFavs from '../logic/getFavs'

function UserProfile(props) {
    console.log('UserProfile rendering')

    const [name, setName] = useState(null)
    const [items, setItems] = useState([])
    const [favourites, setFavourites] = useState([])
    const [messages, setMessages] = useState(null)
}
