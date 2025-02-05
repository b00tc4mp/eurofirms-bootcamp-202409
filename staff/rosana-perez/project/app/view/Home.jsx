import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import ItemsList from '../components/ItemsList'
import Header from '../components/Header'
import Chat from '../components/Chat'
import ChatItemSold from '../components/ChatItemSold'
import Item from '../components/Item'
import Message from '../components/Message'
import OwnItem from '../components/OwnItem'
import LocationListBox from '../components/LocationListBox'
import { Button } from '../components/button.jsx'

import CreateItem from './CreateItem'
import FavItems from './FavItems'
import ChatList from './ChatList'
import ChatMessages from './ChatMessages'
import UserProfile from './UserProfile'
import MyItems from './MyItems'
import Article from './Article'

function Home() {
    console.log('Home rendering')

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ItemsList />} />
                    <Route path="/create" element={<CreateItem />} />
                    <Route path="/favItems" element={<FavItems />} />
                    <Route path="/chatList" element={<ChatList />} />
                    <Route path="/myItems" element={<MyItems />} />
                    <Route path="/userProfile" element={<UserProfile />} />
                    <Route path="/chatMessages" element={<ChatMessages />} />
                    <Route path="/article" element={<Article />} />

                    <Route path="/chat" element={<Chat />} />
                    <Route path="/chatItemSold" element={<ChatItemSold />} />
                    <Route path="/ownItem" element={<OwnItem />} />
                    <Route path="/item" element={<Item />} />
                    <Route path="/locationListBox" element={<LocationListBox />} />
                    <Route path="/message" element={<Message />} />
                </Routes>
            </main >
        </>
    )
}


export default Home
