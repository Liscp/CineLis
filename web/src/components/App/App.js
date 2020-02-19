import React from 'react';
import './App.css';
import Buscar from '../Buscar/Buscar'
import CarteleraList from '../CarteleraList/CarteleraList'
import getData from '../envios/getDd'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      contPelis: [],
      loading: true,
    }
    
  }
  componentDidMount=async()=> {
    getData().then((data) => {
      this.setState({
        contPelis: data,
        loading: false,
      }) 
    });
 }
  render(){
  return (
    <div className="App">
  <h1>Super Cine Lis</h1>
  <Buscar />
 
  
  <CarteleraList contPelis={this.state.contPelis}/>
  
</div>
  )
}
}

export default App;
