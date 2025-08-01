import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/global.css'; // Corrected path

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);