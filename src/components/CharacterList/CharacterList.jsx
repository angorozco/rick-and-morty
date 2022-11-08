import React from 'react'
import Character from '../Character/Character';
import './characterList.css'

const CharacterList = ({info}) => {
  return (
    <div className='character-container'>
      {info?.map((character) =>  <Character key={character.id} character={character} /> )}
    </div>
  )
}

export default CharacterList