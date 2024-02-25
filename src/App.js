/* eslint-disable no-unused-vars */
import './App.css';
import { Ahorcado } from './componentes/Ahorcado';
import { Ocultas } from './componentes/Ocultas';
import { Teclado } from './componentes/Teclado';
import palabras from './palabras';

function App() {

  let objetoPalabras = palabras;


  return (
    <div className="App">

      <div className='container'>

      <h1>Hangman-Game</h1>

      <button className='botonPlay'>Play!</button>

        <div className='main'>

          <Ocultas />

          <Ahorcado />

        </div>

        <Teclado />

      </div>

    </div>
  );
}

export default App;
