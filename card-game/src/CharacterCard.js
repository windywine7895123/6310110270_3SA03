import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterCard(props) {
    const word = "Hello";
    function App() {
     return (
     <div>
     {
     Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
     }
     </div>
     );
    }
}