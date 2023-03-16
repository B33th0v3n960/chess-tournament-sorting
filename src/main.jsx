import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/index.css'

import Navbar from './react/navbar'
import NameForm from './react/form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <NameForm />
  </React.StrictMode>
)
