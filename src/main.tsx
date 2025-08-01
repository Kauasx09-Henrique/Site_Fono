import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 1. Tenta encontrar o elemento com id 'root'
const rootElement = document.getElementById('root');

// 2. SÓ SE o elemento for encontrado (não for null), o app é renderizado
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  // Opcional: Adiciona um erro no console se o elemento não for encontrado
  console.error("Elemento 'root' não encontrado no DOM. O app React não pôde ser iniciado.");
}