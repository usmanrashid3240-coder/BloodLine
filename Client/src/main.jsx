import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Ye line add karein

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Poori App ko isme wrap kar dein */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)