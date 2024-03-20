import React, { useState } from 'react';
import Name from './Name';
import Email from './Email';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to server
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        // Reset form fields
        setName('');
        setEmail('');
      } else {
        console.log('Error sending data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="app">
      <h1>Simple React App</h1>
      <form onSubmit={handleSubmit}>
        <Name value={name} onChange={(e) => setName(e.target.value)} />
        <Email value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;