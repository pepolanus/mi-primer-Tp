let queryBusquedad = location.search
let queryString = new URLSearchParams (queryBusquedad)
let generoEspecifico = queryString.get('id')
let type = queryString.get('type')
let nombreGenero = queryString.get('nameGenre')

let genres = document.querySelector('.Peliculasfavoritas')

if(type === 'movie'){
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${generoEspecifico}&api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log('Console de peliculas')
    
        let datageneros = data.results
        for (let i = 0; i < datageneros.length; i++){
           genres.innerHTML += `
           <a href="./detail-genres.html?id=${datageneros[i].id}"><article>
                <img src = "https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}">
                <h2>${datageneros[i].title}</h2>
            </article></a>`
        }
    })
    .catch(function(error){
        console.log(error)
    })
} else {
    fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${generoEspecifico}&api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log('Console de series')
        let datagenerostv = data.results
        for (let i = 0; i < datagenerostv.length; i++){
            genres.innerHTML += `
           <a href="./detail-series.html?id=${datagenerostv[i].id}"><article>
                <img src = "https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}">
                <h2>${datagenerostv[i].name}</h2>
            </article></a>`
        }
    })
    .catch(function(error){
        console.log(error)
    })
}






