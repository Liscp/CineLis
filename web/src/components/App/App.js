import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'
import getData from '../until/getDtada'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
      loading: true,
    }
    
  }
  componentDidMount=async()=> {
    getData().then((data) => {
      this.setState({
        businesses: data,
        loading: false,
      }) 
    });
 }
  render(){
  return (
    <div className="App">
  <h1>Super Cine Lis</h1>
  <SearchBar />
 
  
  <BusinessList contenido={this.state.businesses}/>
  
</div>
  )
}
}

export default App;
