
import './App.css';
import * as React from 'react';
import Form from './Form';
import ElementoLista from './ElementoLista';

const arrayLista = [];

function App() {

  const [lista,setLista] = React.useState([{index:0, value:"boo", svolto:false}]);

  function addTodo(elemento){
    const nuovaTask = {
      index:arrayLista.length+1,
      value: elemento,
      svolto: false
    }
    arrayLista.push(nuovaTask);
    const nuovaLista = lista;
    nuovaLista.push(nuovaTask);
    setLista(nuovaLista);
    console.log(lista);
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
      <h1 className = "App-header">
        Todo List-Reactive
      </h1>
        <Form addTodo={addTodo}/>
        <div className = "container-list">
            {lista.map((elemento) => (
              <ElementoLista 
                valoreKey={elemento.index}
                elemento = {elemento}
                removeTodo = {removeTodo}
                svoltoTodo = {svoltoTodo}/>
            )
            )}
        </div>
    </div>
  );
}

export default App;

{/* <li className = "container-elemento" key={elemento.index}>
<input type = "button" disabled = {elemento.svolto} value = "SVOLTO" onClick = {()=>svoltoTodo(elemento)}/>              
<div className = {(elemento.tipo)? "elemento-svolto":"elemento_non_svolto"}>{elemento.value}</div>
<input type = "button" onClick={()=>removeTodo(elemento)} value = "RIMUOVI"/>
</li> */}
