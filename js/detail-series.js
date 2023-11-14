let query = location.search;
let objBusqueda = new URLSearchParams(query)
let id= objBusqueda.get('id')

let detalles = document.querySelector('.detalles')
fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
        detalles.innerHTML += `
            <article>
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" />
                <h2>${data.name}</h2>
                <h3> Sinopsis: ${data.overview} </h3>
                <h3> Cantidad de episodios: ${data.episode_run_time} </h3>
                <h3> Fecha de estreno: ${data.first_air_date} </h3>
                <h3> Genero: ${data.genres[0].name} </h3>
                <h3> Rating: ${data.vote_average} </h3>
            </article>`

})
.catch(function(error){
    console.log('Error! Intente mas tarde')
})

let seriesreco = document.querySelector('.seriesreco')

fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    for (let i = 0; i < 5; i++, i<5){
        seriesreco.innerHTML += `
        <a href="./detail-series.html?id=${data.results[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
            <h2>${data.results[i].name}</h2>
        </article></a>`
    }
})
.catch(function(error){
    console.log('error')
})