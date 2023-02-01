import React from 'react';
import './App.css';
import BodyComponent from './components/BodyComponent';
import FetchComponent from './components/FetchComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent subtitle='HeaderComponent Subtitle' txt='ciao a tutti' />
        <BodyComponent subtitle='BodyComponent Subtitle' txt='ciao a tutti' />
        <FetchComponent />
      </header>
    </div>
  );
}

export default App;
