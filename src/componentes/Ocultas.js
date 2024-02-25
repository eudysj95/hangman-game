/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import palabras from '../palabras';

export const Ocultas = () => {
  var objetoPalabras = palabras;

  const [ palabraState, setPalabraState ] = useState("");

  useEffect(() =>{

    let aleatorio = parseInt(Math.random()*10);
    let palabra = objetoPalabras[aleatorio].palabra;
    
    setPalabraState(palabra);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  


  return (


    <div className='ocultas'>
          
            <input type='text' className='oculta' placeholder={palabraState} />


            
            
            
          </div>
  )
}
