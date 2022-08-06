import React from 'react';
import CharacterCard from './CharacterCard';

export default function WordCard(props){
 return (
 <div>
<<<<<<< HEAD
<<<<<<< HEAD
    { Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
=======
{ Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
>>>>>>> 5301f93d0979ef88b6b0d388ea05a02adde51f4f
=======
{ Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
>>>>>>> 5301f93d0979ef88b6b0d388ea05a02adde51f4f
 </div>
 );
}