import './App.css';
import { useRef, useState } from 'react';
import { createStore } from 'redux';

let todos = [{todo: 'Primo Todo', completed: ''}, {todo: 'Secondo Todo', completed: 'completed'},{todo: 'Terzo Todo', completed: ''}]
// const store = createStore((state = {}, action) => { return state }, {})

// Creo lo StoreReducer che si occuperà di modificare lo stato all'interno dello store
// Lo StoreReducer è una pure function che prende come paramentri in ingresso uno stato e delle action
// Tramite le action passte al reducer viene creato un nuovo stato e ritornato
const storeReducer = (state = {}, action) => { 
  //console.log(action);
  switch (action.type) {
    case 'REMOVE_TODO':
        //state.splice(action.index, 1); NO!!!!!!!
        //let prevState = Object.assign([], state);
        //let prevState = [...state];
        //prevState.splice(action.index, 1);
        //return prevState; 
        /* let state1 = state.slice(0, action.index);
        let state2 = state.slice(action.index+1);
        return [...state1, ...state2]; */
        return [...state.slice(0, action.index,), ...state.slice(action.index+1)]
      case 'ADD_TODO':
        //state.push(action.todo); NO!!!!!!!
        return [...state, action.todo]
      case  'COMPLETE_TODO':
        let prevState = Object.assign([], state);
        prevState[action.index].completed = 'completed';
        return prevState;
    default:
      return state 
  }
}

// Creo lo Store Redux passandogli come paramentri uno storeReducer e uno stato iniziale
const store = createStore(storeReducer, todos);

function App() {

  const inputTodo = useRef();
  const [todos, setTodos] = useState([])

  const removeTodo = (index) => {
    // Creo un Action che è un semplice oggetto js che contiene una proprietà di nome type 
    // più tutto quello che gli serve per poter modificare uno stato  
    let objAction = { type: 'REMOVE_TODO', index: index }
  
    // Tramite il dispatch inviamo Action allo storeReducer
    store.dispatch(objAction);
  }

  const addTodo = () => {
    //console.log('Add Todo ' + inputTodo.current.value);
    let objAction = { type: 'ADD_TODO', todo: {todo: inputTodo.current.value, completed: ''} }
    store.dispatch(objAction);
  }

  const completeTodo = (index) => {
    let objAction = { type: 'COMPLETE_TODO', index: index }
    store.dispatch(objAction);
  }

  // tramite la subscribe allo store veniamo a conoscenza della modifica dello stato nello store
  // utilizzando uno stato locale al componente facciamo aggiornare la vista
  store.subscribe(() => {
    console.log('Store Subscribe!!!');
    //console.log(store.getState());
    setTodos([...store.getState()]);
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux App</h1>
        <input type="text" ref={inputTodo} />
        <button onClick={() => addTodo()}>Addd</button>
        {store.getState().map((t, i) => (
          <p key={i} className={t.completed}>
            {t.todo}
            <button onClick={() => removeTodo(i)}>Remove</button>
            <button onClick={() => completeTodo(i)}>Complete</button>
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
