import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import enviarData from '../envios/postPelicula';
import "./Login.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const urlApi = 'http://localhost:4000/login'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            contrasena: ''
        }

        this.nombre = this.nombre.bind(this)
        this.contrasena = this.contrasena.bind(this)
    }

    nombre=async(event)=>{
        this.setState({ nombre: event.target.value })
    }
    contrasena=async(event)=>{
        this.setState({contrasena: event.target.value})
    }

    guardarDatos() {
        const datosUsuario  = JSON.stringify({
            nombre: this.state.nombre,
            contrasena: this.state.contrasena
        })
        enviarData(datosUsuario, urlApi);
    }

render(){
  return (
    <div className="Login">
      <form>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Usuario</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            onChange={this.nombre}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Contraseña</ControlLabel>
          <FormControl
            onChange={this.contrasena}
            type="password"
          />
        </FormGroup>
        <div className="submit">
            <a disabled={!this.guardarDatos()} onClick={this.guardarDatos}>Iniciar Sesión</a>
        </div>
      </form>
    </div>
  );
}
}