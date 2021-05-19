
import './App.css';
import * as React from 'react';
import Form from './Form';
import ElementoLista from './ElementoLista';

function App() {

  const [lista,setLista] = React.useState([]);
  const[count, setCount] = React.useState(0);

  function addTodo(elemento){
    const nuovaTask = {
      index:count,
      value: elemento,
      svolto: false
    }
    setCount(count+1);
    const nuovaLista = lista;
    nuovaLista.push(nuovaTask);
    setLista(nuovaLista);
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
