import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button} from "@material-ui/core"
import MiComponente from './MiComponente';
import MiValidador from './MiValidador';

function App() {
  return (
    <div className="App">V2.0 Mi validador
      <header className="App-header">
        <p>Clave uvalpo</p>
        <MiValidador  valor = "123344" />
      </header>
    </div>
  );
}



export default App;
