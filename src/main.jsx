import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/index.css'

import Navbar from './react/navbar'
import NameForm from './react/form'
import BodyContent from './react/generate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <NameForm />
    <BodyContent />
  </React.StrictMode>
)
