import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() =>{
    axios.get('http://localhost:3001/api/message')
    .then(response => {
      setMessage(response.data.message);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  return (
    <div className="App">
      <h1>{ message }</h1>
    </div>
  );
}

export default App;
