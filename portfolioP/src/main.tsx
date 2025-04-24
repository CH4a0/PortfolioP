// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Puedes agregar tus estilos globales aquí
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap globalmente
const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
