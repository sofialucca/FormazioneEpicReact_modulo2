
import './App.css';
import * as React from 'react';

const arrayLista = [];

// function ContextProvider(){
//   return (<ListaContext.Provider>

//   </ListaContext.Provider>)
// }

// function useContext(){
//   result = React.useContext(ListContext);
//   if(result != null){
//     return result;
//   }else{
//     throw new Error("ERRORE: non posso usare list Context a meno che non inserita in un componente provider")
//   }
// }

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
    <div className = "container-form">
      <form className = "f" onSubmit = {e=>handleSubmit(e)}>
        <input type = "text" placeholder = "...Nuova Task..." value = {elemento} onChange={e => setElemento(e.target.value)}/>
        <input type = "submit" value = "AGGIUNGI"></input>
      </form>
    </div>
  )
}


function App() {

  const [lista,setLista] = React.useState([]);

  function addTodo(elemento){
    const nuovaTask = {
      index:arrayLista.length,
      value: elemento,
      svolto: false
    }
    arrayLista.push(nuovaTask);
    console.log(arrayLista);
    setLista([...lista, nuovaTask]);
  }

  function removeTodo(elemento){
    setLista(lista.filter(el =>el.index !== elemento.index));
  }

  function svoltoTodo(elemento){
    const listaPrecedente = lista.map(el =>{
      if(el.index === elemento.index){
        el.svolto = true;
      }
      return el
    });
    setLista([...listaPrecedente]);
  }

  return (
    <div className="App">
        <Form addTodo={addTodo}/>
        <ul className = "container-list">
            {lista.map((elemento) => (
              <li className = "container-elemento" key={elemento.index}>
              <input type = "button" disabled = {elemento.svolto} value = "SVOLTO" onClick = {()=>svoltoTodo(elemento)}/>              
              <div className = {(elemento.tipo)? "elemento-svolto":"elemento_non_svolto"}>{elemento.value}</div>
              <input type = "button" onClick={()=>removeTodo(elemento)} value = "RIMUOVI"/>
              </li>
            )
            )}
        </ul>
    </div>
  );
}

export default App;
