import * as React from 'react';
import './ElementoLista.css';

function ElementoLista({valoreKey,elemento,removeTodo,svoltoTodo}){

    function handleSvolto(e){
      e.preventDefault();
      svoltoTodo(elemento);
    }
  
    function handleRemove(e){
      e.preventDefault();
      removeTodo(elemento);
    }
  
    return (
      <div className = {["ElementoLista", ((elemento.svolto)? "elemento-svolto":"elemento-non-svolto")].join(' ')} key = {valoreKey}>
        <input type = "button" disabled = {elemento.svolto} value = "SVOLTO" onClick = {(e) => handleSvolto(e)}/>              
        <div className = "contenuto">{elemento.value}</div>
        <input type = "button" onClick={(e)=>handleRemove(e)} value = "RIMUOVI"/>
      </div>
    )
  }

export default ElementoLista;