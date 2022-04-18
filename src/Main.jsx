import React, { Component } from "react";
import "./Estudiante.css";
import logo from "./logo.svg";
import Cursos from "./Cursos";
import Estudiantes from "./Estudiantes";
import CrearEstudiante from "./CrearEstudiante";

export default class Estudiante extends Component {
  render() {
    return (
      <div className="App">
        <header className="estudiante-header">
          <img src={logo} className="estudiante-logo" alt="logo" />
          <CrearEstudiante />
          <p></p>
          <Cursos />
          <p></p>

          <Estudiantes />
          <p></p>
        </header>
      </div>
    );
  }
}
