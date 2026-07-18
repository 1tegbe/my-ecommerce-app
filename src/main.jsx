import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextprovider from '../src/Context/ShopContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextprovider >
    <App />
    </ShopContextprovider>
  </StrictMode>,
)
