import React from 'react';
import ahorcadoImg from '../img/img';

export const Ahorcado = ({ahorcadoState}) => {
  return (
    <div className='ahorcado'>

      {ahorcadoState >= 1 && <img src={ahorcadoImg.ahorcado5} alt='Nada'/>}
      {ahorcadoState >= 2 && <img src={ahorcadoImg.ahorcado4} alt='Nada'/>}
      {ahorcadoState >= 3 && <img src={ahorcadoImg.ahorcado3} alt='Nada'/>}
      {ahorcadoState >= 4 && <img src={ahorcadoImg.ahorcado2} alt='Nada'/>}
      {ahorcadoState >= 5 && <img src={ahorcadoImg.ahorcado1} alt='Nada'/>}

    </div>
  )
}
