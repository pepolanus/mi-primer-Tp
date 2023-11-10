

let detalles = document.querySelector('.detalles')
fetch('https://api.themoviedb.org/3/movie/{iddelamovie}?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results)
    for (let i = 0; i < 1; i++){
        detalles.innerHTML += `
            <article>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
                <h2>${data.results[i].title}</h2>
            </article>`
            
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

queryStringObj.get('id');	
    }
})
.catch(function(error){
    alert('Error! Intente mas tarde')
})