import React from 'react';
import './Business.css'
const green = '#39D1B4';
const yellow = '#FFD712';

class Business extends React.Component{
    render(){
      const {business} = this.props;
      
        return(
            <div className="Business">
  <div className="image-container">
  <img src= {business.imagen} alt="Red dot" />
  </div>
  <div className="Business-information">
    <div className="Business-address">
      <h3>Titulo</h3>
  <h6>{business.titulo}</h6> 
  <h3>Resumen</h3>
  <h6>{business.resumen}</h6>
  <h3>Categoria</h3>
  <h6>{business.categoria}</h6>
  <h3>Valor del Boleto</h3>
  <h6>{business.valorboleto}</h6>
    
  </div>
  </div>
  
    
  </div>

        )
    }
}
export default Business;
 