/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Teclado = ({palabraState, ahorcadoState, setAhorcadoState }) => {

  const navegar = useNavigate()

  var completado = 0
  var contador = 0

  const enviar = e => {
    e.preventDefault();
    let longitud = palabraState.length

    let letra = e.target.value;
    let resultado = palabraState.join().includes(letra);

    if(resultado){

      let input = document.getElementsByName(letra);
      
      for(let i = 0; i < input.length; i++){
        input[i].classList.add('revelada');
        input[i].classList.remove('oculta');
        contador++;
      }
      
      if(contador > 1){
        completado = completado + contador;
        contador = 0;
      }else{
        completado++;
        contador = 0;
      }

      if(completado === longitud){
        navegar("/inicio");
        alert("HAS GANADO!!");
        
      }
    }else{

      setAhorcadoState(ahorcadoState + 1);

    }


  }

  return (
    <div className='teclado'>

          <input type='submit' className='tecla' value="A" onClick={enviar} />
          <input type='submit' className='tecla' value="B" onClick={enviar} />
          <input type='submit' className='tecla' value="C" onClick={enviar} />
          <input type='submit' className='tecla' value="D" onClick={enviar} />
          <input type='submit' className='tecla' value="E" onClick={enviar} />
          <input type='submit' className='tecla' value="F" onClick={enviar} />
          <input type='submit' className='tecla' value="G" onClick={enviar} />
          <input type='submit' className='tecla' value="H" onClick={enviar} />
          <input type='submit' className='tecla' value="I" onClick={enviar} />
          <input type='submit' className='tecla' value="J" onClick={enviar} />
          <input type='submit' className='tecla' value="K" onClick={enviar} />
          <input type='submit' className='tecla' value="L" onClick={enviar} />
          <input type='submit' className='tecla' value="M" onClick={enviar} />
          <input type='submit' className='tecla' value="N" onClick={enviar} />
          <input type='submit' className='tecla' value="Ñ" onClick={enviar} />
          <input type='submit' className='tecla' value="O" onClick={enviar} />
          <input type='submit' className='tecla' value="P" onClick={enviar} />
          <input type='submit' className='tecla' value="Q" onClick={enviar} />
          <input type='submit' className='tecla' value="R" onClick={enviar} />
          <input type='submit' className='tecla' value="S" onClick={enviar} />
          <input type='submit' className='tecla' value="T" onClick={enviar} />
          <input type='submit' className='tecla' value="U" onClick={enviar} />
          <input type='submit' className='tecla' value="V" onClick={enviar} />
          <input type='submit' className='tecla' value="W" onClick={enviar} />
          <input type='submit' className='tecla' value="X" onClick={enviar} />
          <input type='submit' className='tecla' value="Y" onClick={enviar} />
          <input type='submit' className='tecla' value="Z" onClick={enviar} />
          
        </div>
  )
}
