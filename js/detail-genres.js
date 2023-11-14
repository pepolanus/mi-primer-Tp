let genres = document.querySelector('.generosP')

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let datageneros = data.genres
    for (let i = 0; i < datageneros.length; i++){
       genres.innerHTML += `
       <a href="./detail-genres.html?id=${datageneros[i].id}"><article>
            <h2>${datageneros[i].name}</h2>
        </article></a>`
    }
})
.catch(function(error){
    console.log('Error! Intente mas tarde')
})



