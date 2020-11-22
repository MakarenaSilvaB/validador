import React, { Component } from 'react';


class MiComponente extends Component  {

  render() {
    return (
     <div>
        <p>hello world 2 mtf {this.props.mensaje}</p>
        <input type="button" value="CLICK AQUÍ" />
        <img src="https://lh3.googleusercontent.com/proxy/NhaA_5avs1g0u5VIkB5UrDKlxn8A1U5vpAFcP3Ho8T1VK2w0gIl4QuA1gG01FXMIGerjhXYTYjJGOuQL1PKcAlqNjb8Kfq7gv3mkktnnXWdOwGc" />

     </div>
    );
  }
}

export default MiComponente;
