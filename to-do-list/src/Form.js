import * as React from 'react';
import './Form.css';

function Form({addTodo}){
    const[elemento,setElemento] = React.useState("");
  
    function handleSubmit(e){
      e.preventDefault();
      if(!elemento)
        return;
      addTodo(elemento);
      setElemento("");
    }
  
    return(
        <form className = "Form conatiner-flex" onSubmit = {e=>handleSubmit(e)}>
          <input type = "text" placeholder = "...Nuova Task..." value = {elemento} onChange={e => setElemento(e.target.value)} className = "input-Utente"/>
          <input type = "submit" value = "AGGIUNGI" className = "bottone-aggiunta"></input>
        </form>
    )
  }

export default Form;