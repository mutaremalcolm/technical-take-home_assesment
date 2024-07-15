import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <App />
      <Toaster
        position="bottom-center"
      />
    </Router>
  </React.StrictMode>,
)
