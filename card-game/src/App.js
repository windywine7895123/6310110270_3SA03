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
          
          3rd Word
          <WordCard value="Pearl"/>
          <details>
            <summary>Hint</summary>
              <p>
                1.The word same meaning as "Hi", (5 alphabets)<br></br>
                2.Adjetive of your cat,(4 alphabets)<br></br>
                3.Precious thing in the ocean,(5 alphabets)<br></br>

              </p>
          </details>
        
    </div>
    );
  }   
export default App;