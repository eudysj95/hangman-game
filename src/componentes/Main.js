import React, { useState } from 'react'
import { Ocultas } from '../componentes/Ocultas'
import { Ahorcado } from '../componentes/Ahorcado'
import { Teclado } from '../componentes/Teclado'

export const Main = () => {

  const [ palabraState, setPalabraState ] = useState([]);
  const [ ahorcadoState, setAhorcadoState] = useState(0);




  return (
    <>
    
        <div className='main'>

            <Ocultas palabraState={palabraState} setPalabraState={setPalabraState} />

            <Ahorcado ahorcadoState={ahorcadoState} />

        </div>

        <Teclado palabraState={palabraState} ahorcadoState={ahorcadoState} setAhorcadoState={setAhorcadoState} />

    </>
  )
}
