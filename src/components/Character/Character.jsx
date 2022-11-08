import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import './character.css'

const Character = ({character}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className='card' onClick={handleModal}>
      <img src={character.image} alt={character.name} className='card-img' />
      <h1 className='card-name'>{character.name}</h1>
      <p className={`character-status-general ${character.status}`} >{character.status}</p>
      {isModalOpen && <Modal character={character} handleModal={handleModal}/>}
    </div>
  )
}

export default Character