import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Navbar from './react/navbar'
import Card from './react/profile-card'
import CardGroup from './react/group'
import Profile from './data/data.js'
import Input from './react/input'

const player1 = new Profile('Me')
const player2 = new Profile('You')
const player3 = new Profile('He')
const list = [player1, player2, player3]
const groupList = [list, list, list]

const groupListComponent = groupList.map((item, index) => (
  <CardGroup key={`group-${index}`} list={item} />
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <div className='group__container'>{groupListComponent}</div>

    <Input count={4} />
  </React.StrictMode>
)
