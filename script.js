
console.log("test")
console.log(movies)

const movieList = document.getElementById("movie-list")

const movieTitles = movies.map((item) => {
    moviePoster = item.Poster
    let newPoster = document.createElement("img")
    newPoster.src = `${moviePoster}`
    // movieList.appendChild(newPoster)
    addMoviesToDom(newPoster)

})

function addMoviesToDom(movieArray){
    movieList.appendChild(movieArray)
}

// const movieTitles = movies.map((item) => {
//     movieTitle = item.Title
//     let newLi = document.createElement("li")
//     newLi.innerHTML = `${movieTitle}`
//     movieList.appendChild(newLi)

// })
