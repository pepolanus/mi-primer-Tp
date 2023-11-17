let container = document.querySelector('#aaaj')
let queryBusquedad = location.search
let queryString = new URLSearchParams (queryBusquedad)
let peliculaOSerieBuscada= queryString.get('busqueda')
let tipoBusqueda= queryString.get('tipoBusqueda')

let apiKey= '2824d7c18fccbca72f06f7f29e7ebcd8'
fetch(`https://api.themoviedb.org/3/search/${tipoBusqueda}?api_key=${apiKey}&query=${peliculaOSerieBuscada}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for(i=0; i< data.results.length; i++){
        console.log(data)
        container.innerHTML +=`
        <a href="./${tipoBusqueda=="tv"?"detail-series":"detail-pelis"}.html?id=${data.results[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
        </article>
        <article>
            <ul class="ul">
                <p>
                    ${data.results[i].title?data.results[i].title:data.results[i].name}<br> 
                    Sinopsis:${data.results[i].overview}<br>
                    Fecha de estreno: ${data.results[i].release_date?data.results[i].release_date:data.results[i].first_air_date}<br>
                    Genero:${data.results[i].genre_ids[0]} <br>
                    Rating: ${data.results[i].vote_average}<br>
                </p>
            </ul> 
            </article>`
           }
       })
       .catch(function(error){
           console.log('Error')
       })

     