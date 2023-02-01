import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );

/* const titolo = "Ciao a tutti!!!!";
root.render( titolo ); */

// Dimostrazione del virtual DOM
/* function orologio() {
  let oggi = (
    <div>
      <h1>Ciao a tutti</h1>
      <p>Questo è il mio orologio React</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
  root.render( oggi ); 
}
setInterval(orologio, 1000); */

// javascript vanilla 
// -> let h1 = documnet.createElement('h1')
// -> h1.className = 'abc';
// -> h1.innerHTML = 'Ciao a tutti!!'
/* const titolo = React.createElement('h1', {className: 'abc'}, 'Ciao a tutti!!');
root.render( titolo ); */


// render di una lista

//const arr = ['primo post', 'secondo post', 'terzo post', 'quarto post', 'quarto post'];

/* const lista = React.createElement(
                                  'ul', 
                                  null, 
                                  // React.createElement('li', null, arr[0]),
                                  // React.createElement('li', null, arr[1]),
                                  // React.createElement('li', null, arr[2]) 
                                  arr.map((ele, index) => React.createElement('li', {key: index}, ele))
                                  ); */
                                  
/* const lista = <> {// ->  React.Fragment }
                <h1>Ciao a tutti</h1>
                <ul>
                  {arr.map((ele, index) => <li key={index}>{ele}</li>)}
                </ul>
              </> 


root.render( lista );*/