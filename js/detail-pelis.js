let query = location.search;
let objBusqueda = new URLSearchParams(query)
let id= objBusqueda.get('id')

let detalles = document.querySelector('.detalles')
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
        detalles.innerHTML += `
            <article>
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" />
                <h2>${data.title}</h2>
                <h3>${data.overview} </h3>
                <h3>${data.runtime} </h3>
                <h3>${data.release_date} </h3>
                <h3>${data.genres[0].name} </h3>
                <h3>${data.vote_average} </h3>
            </article>`

})
.catch(function(error){
    console.log('Error! Intente mas tarde')
})

let pelisreco = document.querySelector('.pelisreco')

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    for (let i = 0; i < 5; i++, i<5){
        pelisreco.innerHTML += `
        <a href="./detail-pelis.html?id=${data.results[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
            <h2>${data.results[i].title}</h2>
        </article></a>`
    }
})
.catch(function(error){
    console.log('error')
})