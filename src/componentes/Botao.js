import React from "react";
import '../stylesheets/Botao.css'

function Botao(props) {

  const eOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
  };
  
  return (
    <div 
      className={`recipiente-botao ${eOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div> 
  );
}

export default Botao;