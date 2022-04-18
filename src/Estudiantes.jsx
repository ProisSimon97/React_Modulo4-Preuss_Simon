import React, { Component } from "react";

export default class Estudiantes extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.limpiar = this.limpiar.bind(this);

    this.state = {
      estudiantes: [],
      nombre: "",
    };
  }

  handleClick() {
    fetch("http://localhost:1234/estudiantes")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiantes: json.estudiantes,
        });
      });
  }

  limpiar() {
    this.setState({
      estudiantes: [],
      nombre: "",
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          name="nombre"
          type="text"
          style={{ marginRight: "5px", width: "75px" }}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
          name="button"
          style={{ marginRight: "5px" }}
        >
          Estudiante
        </button>
        <button onClick={this.limpiar} name="button">
          Limpiar
        </button>
        <p></p>

        <div>
          {" "}
          <table className="table">
            <thead>
              <tr>
                <th>Nombre </th>
                <th>Apellido</th>
                <th>Cursos</th>
              </tr>
            </thead>

            <tbody>
              {this.state.estudiantes
                .filter((estudiante) => estudiante.nombre === this.state.nombre)
                .map((r) => {
                  return (
                    <tr key={r.nombre}>
                      <td>{r.nombre}</td>
                      <td>{r.apellido}</td>

                      <td>
                        {r.cursos.map((c) => {
                          return <li>{c.nombre}</li>;
                        })}
                      </td>
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
