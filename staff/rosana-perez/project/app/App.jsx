import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreateItem from './view/CreateItem'
import FavItems from './view/FavItems'
import ChatList from './view/ChatList'
import ChatMessages from './view/ChatMessages'
import UserProfile from './view/UserProfile'
import ItemsAsGuest from './view/ItemsAsGuest'
import MyItems from './view/MyItems'


import isUserLoggedIn from './logic/isUserLoggedIn'
import getChat from './logic/getChat'

function App() {
    console.log('App rendering')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')
    const [chatId, setChatId] = useState(null)

    console.log('App -> state: view = ' + view)

    return <>

        {view === 'welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLoginClick={() => setView('login')}

            onBrowseItems={() => setView('itemsAsGuest')}
        />}

        {view === 'register' && <Register
            onLoginClick={() => setView('login')}

            onRegisterSuccess={() => setView('login')}

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'login' && <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'home' && <Home
            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')}
        />}

        {view === 'create' && <CreateItem
            onCreated={() => setView('home')}

            onCancelClick={() => setView('home')}
        />}

        {view === 'favItems' && <FavItems
            onCancelClick={() => setView('home')}
        />}

        {view === 'myItems' && <MyItems
            onCancelClick={() => setView('home')}
        />}

        {view === 'userProfile' && <UserProfile
            onCancelClick={() => setView('home')}

            onEditUserData={() => setView('home')}
        />}

        {view === 'chatList' && <ChatList
            onChatMessages={(chatId) => {
                setChatId(chatId)
                setView('chatMessages')
            }}
            onCancelClick={() => setView('home')}
        />}

        {view === 'chatMessages' && <ChatMessages
            chatId={chatId}
            onMessage={getChat(chatId)}

            onCancelClick={() => setView('chatList')}
        />}

        {view === 'itemsAsGuest' && <ItemsAsGuest
            onLoginClick={() => setView('login')}

            onCancelClick={() => setView('welcome')}
        />
        }
    </>
}

export default App