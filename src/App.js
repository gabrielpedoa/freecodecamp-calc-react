import './App.css';
import freeCodeCampLogo from './imagens/freecodecamp-logo.png';
import Botao from './componentes/Botao';
import Visor from './componentes/Visor';
import BotaoClear from './componentes/BotaoClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    } else {
      alert('por favor digite um valor');
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-conteudo-logo'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp' />
      </div>
      <div className='conteudo-calculadora'>
        <Visor input={input}/>
        <div className='fila'>
          <Botao manejarClic={agregarInput}>1</Botao>
          <Botao manejarClic={agregarInput}>2</Botao>
          <Botao manejarClic={agregarInput}>3</Botao>
          <Botao manejarClic={agregarInput}>+</Botao>
        </div>
        <div className='fila'>
          <Botao manejarClic={agregarInput}>4</Botao>
          <Botao manejarClic={agregarInput}>5</Botao>
          <Botao manejarClic={agregarInput}>6</Botao>
          <Botao manejarClic={agregarInput}>-</Botao>
        </div>
        <div className='fila'>
          <Botao manejarClic={agregarInput}>7</Botao>
          <Botao manejarClic={agregarInput}>8</Botao>
          <Botao manejarClic={agregarInput}>9</Botao>
          <Botao manejarClic={agregarInput}>*</Botao>
        </div>
        <div className='fila'>
          <Botao manejarClic={calcularResultado}>=</Botao>
          <Botao manejarClic={agregarInput}>0</Botao>
          <Botao manejarClic={agregarInput}>.</Botao>
          <Botao manejarClic={agregarInput}>/</Botao>
        </div>
        <div className='botao-clear'>
          <BotaoClear manejarClear={() => setInput('')}>
            Clear
          </BotaoClear>
        </div>
      </div>
    </div>
  );
}

export default App;
