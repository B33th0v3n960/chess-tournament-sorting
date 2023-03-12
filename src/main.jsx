import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Navbar from './react/navbar'
import Card from './react/profile-card'
import CardGroup from './react/group'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    <div className='group__container'>
      <CardGroup />
      <CardGroup />
      <CardGroup />
    </div>
  </React.StrictMode>
)
