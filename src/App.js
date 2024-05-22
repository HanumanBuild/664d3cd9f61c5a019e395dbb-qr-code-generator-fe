import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Defining the App component
function App() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_QR_CODE_GENERATOR_BE_URL}/generateQR`, {
        params: { url: text },
      });
      setQrCode(response.data);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  // Rendering the component
  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Enter Text
            </label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate QR Code
          </button>
        </form>
        {qrCode && (
          <div className="qr-code mt-4">
            <img src={qrCode} alt="Generated QR Code" />
          </div>
        )}
      </div>
    </div>
  );
}

// Exporting the App component
export default App;