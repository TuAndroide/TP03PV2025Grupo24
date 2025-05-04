import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Productos from './Adicional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Productos/>
  </StrictMode>,
)
