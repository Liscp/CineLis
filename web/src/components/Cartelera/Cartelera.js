import React from 'react';
import './Cartelera.css'


class Cartelera extends React.Component{
  render(){
    const {contPeli} = this.props;
    return(
      <div className="Cartelera">
        <div className="image-container">
          <img src= {contPeli.imagen} alt="Red dot" />
        </div>
        <div className="Cartelera-information">
          <div className="Cartelera-address">
            <h3>Titulo</h3>
            <h6>{contPeli.titulo}</h6> 
            <h3>Resumen</h3>
            <h6>{contPeli.resumen}</h6>
            <h3>Categoria</h3>
            <h6>{contPeli.categoria}</h6>
            <h3>Valor del Boleto</h3>
            <h6>{contPeli.valorboleto}</h6>
          </div>
        </div>
      </div>
    )
  }
}
export default Cartelera;
 