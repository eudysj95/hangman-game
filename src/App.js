/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { Ahorcado } from './componentes/Ahorcado';
import { Ocultas } from './componentes/Ocultas';
import { Teclado } from './componentes/Teclado';
import palabras from './palabras';
import { MisRutas } from './rutas/MisRutas';

function App() {

  

  let objetoPalabras = palabras;


  return (
    <div className="App">

      <MisRutas />

    </div>
  );
}

export default App;
