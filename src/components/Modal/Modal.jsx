import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({character, handleModal}) => {
  return ReactDOM.createPortal(
    <div className='overlay' onClick={handleModal} >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <img src={character.image} alt="" className='modal-img' />
        <div className='modal-info'>
          <h2 className='modal-name'>{character.name}</h2>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    </div>
    , document.getElementById('modal')
  )
}

export default Modal