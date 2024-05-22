import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

// Ensure the environment variable is correctly referenced
const backendUrl = process.env.REACT_APP_QR_CODE_GENERATOR_BE_URL;

const response = await axios.get(`${backendUrl}/generateQR`, {
  params: { url: text },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Ensure reportWebVitals is imported and used
import reportWebVitals from './reportWebVitals';
reportWebVitals();