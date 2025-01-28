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
import Header from './components/Header'
import Article from './view/Article.jsx'


import logic from './logic/index.js'

function App() {
    console.log('App rendering')

    const [view, setView] = useState(logic.isUserLoggedIn() ? 'home' : 'welcome')
    const [chatId, setChatId] = useState(null)
    const [itemId, setItemId] = useState(null)

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

        {view === 'home' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <Home
                onItemDownloaded={(itemId) => {
                    setItemId(itemId)
                    setView('article')
                }} />
        </>}

        {view === 'create' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <CreateItem
                onCreated={() => setView('home')}

                onCancelClick={() => setView('home')}
            /></>}

        {view === 'favItems' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <FavItems
                onItemDownloaded={(itemId) => {
                    setItemId(itemId)
                    setView('article')
                }}

            /></>}

        {view === 'myItems' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} /><MyItems

            /></>}

        {view === 'userProfile' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <UserProfile
                onEditUserData={() => setView('home')}
            /></>}

        {view === 'chatList' && <> <Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <ChatList
                onChatMessages={(chatId) => {
                    setChatId(chatId)
                    setView('chatMessages')
                }}
                onItemDownloaded={(itemId) => {
                    setItemId(itemId)
                    setView('article')
                }}
                onCancelClick={() => setView('home')}
            /> </>}

        {view === 'chatMessages' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <ChatMessages
                chatId={chatId}
                onMessage={logic.getChat(chatId)}
            /></>}

        {view === 'article' && <><Header
            onSetHome={() => setView('home')}

            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onMyItems={() => setView('myItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chatList')}

            onLogout={() => setView('welcome')} />
            <Article
                itemId={itemId}
            /></>}

        {view === 'itemsAsGuest' && <ItemsAsGuest
            onLoginClick={() => setView('login')}

            onCancelClick={() => setView('welcome')}
        />
        }
    </>
}

export default App