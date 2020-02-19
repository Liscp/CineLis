import React from 'react';
import './Buscar.css'
import FileBase64 from 'react-file-base64';
import enviarData from '../envios/postPelicula'
let miurl = 'http://localhost:4000/user';
class Buscar extends React.Component{
  constructor(props){
    super(props)
    this.state= { 
      imagen: '',
      titulo: '',
      resumen: '',
      categoria: 'comedia',
      valorboleto: '',
      estado : true
    }
    
    this.primero=this.primero.bind(this)
    this.segundo=this.segundo.bind(this)
    this.tercero=this.tercero.bind(this)
    this.cuarto=this.cuarto.bind(this)
  
  }
  quinto=async(files)=>{
    
    const datos = JSON.stringify(files)
    
    const imgText = datos.split('base64":"')
    console.log(imgText)
    const imgString = String(imgText[1])
    const pencil = imgString.split('","file":{}}]')
    console.log(String(pencil[0]))
    await this.setState({ imagen: String(pencil[0]) })
    
  }
  primero(event){
    this.setState({titulo: event.target.value})
  }
  segundo(event){
    this.setState({resumen: event.target.value})
  }
  tercero(event){
    this.setState({categoria: event.target.value})
  }
  cuarto(event){
    this.setState({valorboleto: event.target.value})
  }
  
  
 envio=async(est)=>{
  
  const name = est.target.value;
  if(name === 'Borrar'){
    miurl = 'http://localhost:4000/user/delete'
  }else if (name === 'Actualizar'){
    miurl = 'http://localhost:4000/user/update'
  }
  
  const data = JSON.stringify({
    imagen: this.state.imagen,
    titulo: this.state.titulo,
    resumen: this.state.resumen,
    categoria: await this.state.categoria,
    valorboleto: this.state.valorboleto,
    estado: this.state.estado,
  })
  enviarData(data, miurl)
 }
  
 
 
 
    render(){
        return(
          <div className="Buscar">
            <div className="Buscar-sort-options">
            </div>
            <div className="Buscar-submit"><h2> {this.state.titulo}</h2></div>
            <div className="Buscar-fields">
              <input placeholder="Titulo" onChange={this.primero}/>
              <input placeholder="Resumen" onChange={this.segundo}/>
              <select id="great-names" onChange={this.tercero}>
                <option value="Comedia">
                  Comedia
                </option>
                <option value="Terror">
                  Terror
                </option>
                <option value="Drama">
                  Drama
                </option>
              </select>
              <input placeholder="Valor Boleto" onChange={this.cuarto}/>
              <select id="great-names" onChange={this.envio}>
                <option value="Crear">
                  Crear
                </option>
                <option value="Borrar">
                  Borrar
                </option>
                <option value="Actualizar">
                  Actualizar
                </option>
              </select>
            </div>
            
            <FileBase64
              multiple={ true }
              onDone={ this.quinto.bind(this) } />
            <div className="Buscar-submit">
              <a onClick={this.envio}>Crear Super Pelicula</a>
            </div >
          </div>
        )  
    }
}

export default Buscar;