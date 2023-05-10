import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

import HouseContextProvider from './components/HouseContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
  </HouseContextProvider>
)

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
  </HouseContextProvider> 

)  */
  
