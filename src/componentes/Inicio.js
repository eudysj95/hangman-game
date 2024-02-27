import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Inicio = () => {

    const navegar = useNavigate();

    const enviar = e =>{
        navegar("/main");
    }

  return (
    <div>

        <button className='botonPlay' onClick={enviar}>Play!</button>

    </div>
  )
}
