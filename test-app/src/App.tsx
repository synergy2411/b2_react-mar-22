import React from 'react';
import logo from './logo.svg';
import './App.css';
import Async from './Components/Async/Async';
import Parent from './Components/Parent/Parent';

function App() {
  return (
    <div className="App">
      <h3>Hello React</h3>
      <Parent />
    </div>
  );
}

export default App;
