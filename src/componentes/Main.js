import React, { useState } from 'react'
import { Ocultas } from '../componentes/Ocultas'
import { Ahorcado } from '../componentes/Ahorcado'
import { Teclado } from '../componentes/Teclado'

export const Main = () => {

  const [ palabraState, setPalabraState ] = useState([]);




  return (
    <>
    
        <div className='main'>

            <Ocultas palabraState={palabraState} setPalabraState={setPalabraState} />

            <Ahorcado />

        </div>

        <Teclado palabraState={palabraState} setPalabraState={setPalabraState} />

    </>
  )
}
