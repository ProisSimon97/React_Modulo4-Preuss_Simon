import React, { Component } from "react";

export default class CrearEstudiante extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        cursos: "",
      },

      resultado: "",
      cursos: [],
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState((state) => ({
      form: {
        ...state.form,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        cursos: [this.state.form.cursos],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.messenge,
          });
          return;
        }

        this.setState({
          resultado: "Estudiante creado con exito",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              style={{ marginRight: "25px", width: "75px" }}
              onChange={this.handleChange}
              value={this.state.form.nombre}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="apellido"
              style={{ marginRight: "25px", width: "75px" }}
              onChange={this.handleChange}
              value={this.state.form.apellido}
            />
          </label>

          <select
            name="cursos"
            style={{ marginRight: "25px", width: "110px" }}
            onChange={this.handleChange}
          >
            {this.state.cursos.map((r) => {
              return <option> {r.nombre} </option>;
            })}
          </select>

          <button onClick={this.handleSubmit} type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
