import React, { Component } from "react";

export default class Cursos extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.limpiar = this.limpiar.bind(this);

    this.state = {
      cursos: [],
    };
  }

  handleClick() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          resultado: json.result,
        });
      });
  }

  limpiar() {
    this.setState({ cursos: [] });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          name="button"
          style={{ marginRight: "5px" }}
        >
          Listar Todos
        </button>
        <button onClick={this.limpiar} name="button">
          Limpiar
        </button>
        <p />

        <div>
          <table className="table">
            <tbody>
              {this.state.cursos.map((r) => {
                return (
                  <tr key={r.nombre}>
                    <td>{r.nombre}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
