
const updateState=async(data,x)=>{
    const updateURL = `http://localhost:4000/cartelera/${x}`
    try{
      const response = await fetch(updateURL,{
        method: 'POST',
        body: JSON.stringify({    
            estado: data
        }),
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        console.log('se ha actualizado')
      }
    }catch(error){
      console.log(error)
    }
  }
  export default updateState;