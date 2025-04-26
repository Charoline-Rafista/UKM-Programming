import React from 'react';
import ReactDOM from 'react-dom/client'; // Perhatikan perubahan ini
import App from './App';

// Ganti ReactDOM.render dengan ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
