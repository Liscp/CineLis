const url = `http://localhost:4000/cartelera`
const Yelp = {
    search(){
        return fetch(JSON.parse(url) ).then(response=>response.json()).then(jsonResponse=>{
            if(jsonResponse.ok){
                return JSON.parse(jsonResponse).map(business=>{
                    console.log(jsonResponse)
                    console.log('funciono')
                    return {
                        id: business.id,
                        titulo: business.titulo,
                        resumen: business.resumen,
                        categoria: business.categoria,
                        valorboleto: business.valorboleto,
                    }
                    
                })
            }
        });
    }
}

export default Yelp;