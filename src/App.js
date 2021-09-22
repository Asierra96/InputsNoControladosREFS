import React, { Component } from "react";

class InputNoControlado extends Component {
  nombre = React.createRef();
  email = React.createRef();

  handleClick = () => {
    const nombre = this.nombre.current.value;
    const email = this.email.current.value;

    this.props.onSend({ nombre, email });
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.nombre} placeholder="Nombre" />
        <input type="text" ref={this.email} placeholder="Email" />
        <button onClick={this.handleClick}> Enviar </button>
      </div>
    );
  }
}

class App extends Component {
  send = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Inputs no controlados refs </h1>
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}
export default App;
