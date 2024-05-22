import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_QR_CODE_GENERATOR_BE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const response = await axios.get(`${backendUrl}/generateQR`, {
  params: { url: text },
});

reportWebVitals();