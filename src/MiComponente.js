import React, { Component } from 'react';


class MiComponente extends Component  {

  render() {
    return (
     <div>
        <p>hello world 2 mtf {this.props.mensaje}</p>
        <input type="button" value="presione aqui"  />

     </div>
    );
  }
}

export default MiComponente;
