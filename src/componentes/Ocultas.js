/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import palabras from '../palabras';

export const Ocultas = ({palabraState, setPalabraState}) => {
  

  useEffect(() =>{

    rellenar();
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  
  const rellenar = () => {
    let objetoPalabras = palabras;
    let aleatorio = parseInt(Math.random()*10);
    let palabra = objetoPalabras[aleatorio].palabra;
    let arrayPalabra = [];

    for(let i = 0; i < palabra.length; i++){
      arrayPalabra.push(palabra.slice(i, i+1).toUpperCase());
      console.log(arrayPalabra);
    }
    /* let letra = palabra.slice(0, 1).toUpperCase(); */
    
    setPalabraState(arrayPalabra);
    
  }
  

  return (

    <div className='ocultas'>
          
          {palabraState.map(letra =>{
            return(
              <input type='text' readOnly key={Math.random()} className='oculta' name={letra} value={letra} />
            );
          })}
      {/* <input type='text' className='oculta' value={letra} />  */} 
            
    </div>
  )
}
