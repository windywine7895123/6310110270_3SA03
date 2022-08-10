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
          <center>
          <marquee direction="left">{"Click alphabet cards to be word"}</marquee>
          <br></br>
          1st Word
          <WordCard value="hello"/>
        
          2nd Word
          <WordCard value="Cute"/>
          
          3rd Word
          <WordCard value="Pearl"/>
          <button className = 'button button1'  onClick={buttonRefresh}>Refresh</button>
          <details>
            <summary>Hint</summary>
                1.The word same meaning as "Hi", (5 alphabets)<br></br>
                2.Adjetive of your cat,(4 alphabets)<br></br>
                3.Precious thing in the ocean,(5 alphabets)<br></br>
          </details>
          </center>
    </div>
    );
  }   
export default App;