import React from 'react';
import './App.css';
import MiValidador from './MiValidador';
import imagen from './index.png';
import Footer from './footer'


function App() {
  return (
    <div className="App">Validat-E™ V2.0
      <header className="App-header">
        <img src={imagen} alt="pic"/>
        <p>Ingrese su rut</p>
        <MiValidador  placeholder="XXXXXXXX-X" />
      </header>
      <Footer/>
    </div>
  );
}


export default App;
