import React from 'react';
import './character.css'

const Character = ({character}) => {
  return (
    <div className='card'>
      <img src={character.image} alt={character.name} className='card-img' />
      <h1 className='card-name'>{character.name}</h1>
      <p className={`character-status-general ${character.status}`} >{character.status}</p>
    </div>
  )
}

export default Character