import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business'
import updateState from '../until/updateData'

 class BusinessList extends React.Component{
     constructor(props){
         super(props);
         this.state= {
             numero: [],
             estado: [],
         }
         this.handleCheck = this.handleCheck.bind(this)
     }
    handleCheck=async(x,y)=> {
        const cambio = y==true?false:true;
        console.log(y)
       await this.setState({
           numero: x,
           estado: cambio
       })
       console.log(this.state.estado)
       updateState(this.state.estado, this.state.numero)
    }
     render(){
         return(
            <div className="BusinessList" >
     {this.props.contenido.map((business)=>{

     return (<button onClick={()=>this.handleCheck(business.id,business.estado)}><Business business={business} /></button> )
     })}
             
</div>
         )
     }
 }
export default BusinessList;