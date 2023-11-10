let peliculasFavoritas = document.querySelector('.Peliculasfavoritas')

fetch('https://api.themoviedb.org/3/discover/movie?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    for (let i = 0; i < 5; i++){
        peliculasFavoritas.innerHTML += `
        <a href="./detail-pelis.html?id=${data.results[i].id}"><article>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
            <h2>${data.results[i].title}</h2>
        </article></a>`
    }
})
.catch(function(error){
    alert('Error! Intente mas tarde')
})


let seriesfav = document.querySelector('.seriesfav')


fetch('https://api.themoviedb.org/3/discover/tv?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    console.log('entra al primer then')
    return response.json()
})
.then(function(data){
    console.log(data.results);
    for (let i = 0; i < 5; i++, i<5){
        seriesfav.innerHTML += `
        <article>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
            <h2>${data.results[i].name}</h2>
        </article>`
    }
})
.catch(function(error){
    alert('Error! Intente mas tarde')
})



let masvis = document.querySelector('.masvis')

fetch('https://api.themoviedb.org/3/discover/movie?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    for (let i = 0; i < 5; i++, i<5){
        masvis.innerHTML += `
        <article>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
            <h2>${data.results[i].title}</h2>
        </article>`
    }
})
.catch(function(error){
    alert('Error! Intente mas tarde')
})