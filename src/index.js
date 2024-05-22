import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure the environment variable is correctly referenced
const backendUrl = process.env.REACT_APP_QR_CODE_GENERATOR_BE_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Replace the faulty lines with the correct reference
// Before:
// const response = await axios.get(`${REACT_APP_QR_CODE_GENERATOR_BE_URL}/generateQR`, {
// After:
const response = await axios.get(`${backendUrl}/generateQR`, {

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();