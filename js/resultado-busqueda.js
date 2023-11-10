let container = document.querySelector('#lol')
let queryBusquedad = location.search
let queryString = new URLSearchParams (queryBusquedad)
let peliculaOSerieBuscada= queryString.get('busqueda')
let apiKey= '2824d7c18fccbca72f06f7f29e7ebcd8'
fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${peliculaOSerieBuscada}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for(i=0; i< data.results.length; i++){
        container.innerHTML +=`
        <article>
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
        </article>
        <article>
            <ul class="ul">
                <p>
                    Nombre: ${data.results[i].name}<br> 
                    Rating: ${data.results[i].vote_average}<br>
                    Fecha de estreno: ${data.results[i].first_air_date}<br>
                    Sinopsis:${data.results[i].overview}<br>
                    Genero:${data.results[i].genre_ids} <br>
                    <a href="./favoritos.html">
                        <button type="button" class="boton">Favoritos</button>
                    </a>
                </p>
            </ul> 
            </article>`
           }
       })
       .catch(function(err){
           console.log(err)
       })
