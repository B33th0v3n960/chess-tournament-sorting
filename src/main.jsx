import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Navbar from './react/navbar'
import Card from './react/profile-card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Card profile={{name: 'Zhou Sun', point: 3}}/>
  </React.StrictMode>
)
