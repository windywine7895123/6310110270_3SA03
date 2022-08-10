import React from 'react';
import './App.css';
import WordCard from './WordCard';
const buttonRefresh = () =>
{
    window.location.reload();
}

function App() {
  return (
    <div>
        <button className = 'button button1' onClick={buttonRefresh}>Refresh</button>
        <WordCard value="hello"/>
        <WordCard value="Nano"/>
    </div>
    );
  }   
export default App;