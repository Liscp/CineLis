import React from 'react';
import './CarteleraList.css'
import Cartelera from '../Cartelera/Cartelera'
import updateState from '../envios/updateDb'

 class CarteleraList extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            numero: [],
            estado: [],
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleCheck=async(x,y)=> {
        const cambioEstado = y===true?false:true;
        console.log(y)
       await this.setState({
           numero: x,
           estado: cambioEstado
       })
       console.log(this.state.estado)
       updateState(this.state.estado, this.state.numero)
    }
    render(){
        return(
            <div className="CarteleraList">
                {this.props.contPelis.map((contPeli)=>{
                    return (<button onClick={()=>this.handleCheck(contPeli.id,contPeli.estado)}><Cartelera contPeli={contPeli}/></button> )
                })}
            </div>
        )
    }
}
export default CarteleraList;