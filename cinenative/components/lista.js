import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Container, Header, Content } from 'native-base';
import getData from '../until/Getdata'
import { ListItem, Card } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import DialogInput from 'react-native-dialog-input';
import envio from '../until/sendData'
export default class Lista extends Component {
constructor(props){
  super(props);
  this.state = {
    data: [],
    loading: true,
    isDialogVisible: false,
    movie: [],
    valordeMovie: [],
    numeroboletos: [],
    valorTotal: [],
    emailVisible: false,
    correo: [],
  }
}
 componentDidMount=async()=> {
    getData().then((data) => {
      this.setState({
        data: data,
        loading: false,
      })  
    });
 }
 activar=async(x,y)=>{
   await this.setState({
    isDialogVisible: true,
    movie: x,
    valordeMovie: y,
    
   })
   console.log(this.state.movie)
 }
 contenidoMovie(){
   return (`Ingrese el número de boletos que desea comprar para la película ${this.state.movie}`)
 }
 desactivar(){
  this.setState({
    isDialogVisible: false
  })
}
sendInput=async(x)=>{
  await this.setState({
    numeroboletos: x,
    isDialogVisible: false,
  })
  
    this.activadorEmail(true)  
  
  
}
activadorEmail=async(x)=>{
  await this.setState({
    valorTotal:  parseInt(this.state.valordeMovie) * parseInt(this.state.numeroboletos)
  })
  this.setState({
    emailVisible: x,
  })
}
boxEmail=async(x)=>{
  await this.setState({
    correo: x
  })
  alert(`Has comprado ${this.state.numeroboletos} boletos para la pelicula ${this.state.movie} por favor revisa tu Email ${this.state.correo}`)
  envio(this.state.movie,this.state.numeroboletos,this.state.correo,this.state.valordeMovie)
  this.activadorEmail(false)

}

contenido(){
  return (`Tu valor total a pagar es de $${this.state.valorTotal} por la cantidad de  ${this.state.numeroboletos} boletos por favor ingresa tu email para confirmar tu compra`)
}
 render(){
      if(this.state.loading) {
        return <Text>Cargando</Text>
    }
  return (
    <Container>
      <Header>
        <Text>Super Cine Lis</Text>
      </Header>
      
        
          <ScrollView>
            <View >
              
              {
                this.state.data.map((l, i) => (
                  <Content>
                    <Card>
                        <ListItem 
                          Component={TouchableScale}
                          friction={90} 
                          tension={100} 
                          activeScale={0.95}
                          linearGradientProps={{
                            colors: ['#2089dc', '#535ccc'],
                            start: [1, 0],
                            end: [0.2, 0],
                          }}
                          
                          key={i}
                          leftAvatar={{rounded: true, source: {uri:l.imagen}}}
                          title={l.titulo}
                          subtitle={l.resumen}
                          rightSubtitle={l.categoria}
                          rightTitle={l.valorboleto}
                          button onPress={() => this.activar(l.titulo, l.valorboleto)}
                          bottomDivider
                        ></ListItem>
                    </Card>
                  </Content>
                ))
              }
              
              <DialogInput isDialogVisible={this.state.isDialogVisible}
                title={this.contenidoMovie()}
                hintInput ={"5"}
                submitInput={ (inputText) => {this.sendInput(inputText)} }
                closeDialog={ () => {this.desactivar()}}>
              </DialogInput>
              <DialogInput isDialogVisible={this.state.emailVisible}
                title={this.contenido()}  
                hintInput ={"example@example.com"}
                submitInput={ (inputText) => {this.boxEmail(inputText)} }
                closeDialog={ () => {this.activadorEmail(false)}}>
              </DialogInput>
            </View>
          </ScrollView>
    </Container>
   
  
  );
}
}
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
})