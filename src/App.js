import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button} from "@material-ui/core"
import MiComponente from './MiComponente';
import MiValidador from './MiValidador';

function App() {
  return (
    <div className="App">Validador Maka's Version
      <header className="App-header">
        <p>Ingrese su rut</p>
        <MiValidador  valor = "123344" />
      </header>
    </div>
  );
}



export default App;
