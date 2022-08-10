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
          <br></br>
          1st Word
          <WordCard value="hello"/>
        
          2nd Word
          <WordCard value="Cute"/>
          
          3nd Word
          <WordCard value="Pearl"/>
        
    </div>
    );
  }   
export default App;