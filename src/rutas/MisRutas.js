import React from 'react'
import { Inicio } from '../componentes/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../componentes/Main'

export const MisRutas = () => {
  return (

    <BrowserRouter>

        <div className='container'>

            <h1>Hangman-Game</h1>

            <Routes>

                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio'element={<Inicio/>}/>
                <Route path='/main' element={<Main/>} />

            </Routes>
            

             
        </div>

      </BrowserRouter>
  )
}
