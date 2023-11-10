fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=2824d7c18fccbca72f06f7f29e7ebcd8')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let PFav = data
})
.catch(function(error){
    console.log(error)
})

