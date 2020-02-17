const enviarData=async(x,y)=>{

    
    try{
      const response = await fetch(y,{
        method: 'POST',
        body: x,
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        console.log('respuesta favorable')
      }
    }catch(error){
      console.log(error)
    }
  }
export default enviarData;