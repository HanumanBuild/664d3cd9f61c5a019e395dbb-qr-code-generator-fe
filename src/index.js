import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const backendUrl = process.env.REACT_APP_QR_CODE_GENERATOR_BE_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const response = await axios.get(`${backendUrl}/generateQR`, {
  params: { url: text },
});

reportWebVitals();