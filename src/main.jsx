import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Productos from './Adicional.jsx';
import './index.css'; // Importa el index

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-container"> {/* Aplica la classe des de index.css */}
      <App />
      <Productos />
    </div>
  </StrictMode>,
);