import React from 'react';
import './App.css';
import WordCard from './WordCard';
const buttonRefresh = () =>
{
    window.location.reload();
}

function App() {
  return (
    <div className='background'>
          <center>
          <marquee className ='Howto' direction="left">{"Click alphabet cards to be word"}</marquee>
          <br></br>
          <p className='text1' >1st Word</p>
          <WordCard value="hello"/>

          <p className='text1' >2nd Word</p>
          <WordCard value="Cute"/>
          
          <p className='text1' >3rd Word</p>
          <WordCard value="Pearl"/>
          <button className = 'button button1'  onClick={buttonRefresh}>Refresh</button>
          <details className='Hint'>
            <summary>Hint</summary>
                1.The word same meaning as "Hi", (5 alphabets)<br></br>
                2.Adjetive of your cat,(4 alphabets)<br></br>
                3.Precious thing in the ocean,(5 alphabets)<br></br>
          </details>

          <details className='Answer'>
            <summary>Answer</summary>
                1.Hello<br></br>
                2.Cute<br></br>
                3.Pearl<br></br>
          </details>

          </center>
    </div>
    );
  }   
export default App;