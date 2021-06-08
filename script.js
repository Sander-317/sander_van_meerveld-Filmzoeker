
console.log("test")
console.log(movies)

const movieList = document.getElementById("movie-list")

const movieTitles = movies.map((item) => {
    movieTitle = item.Title
    let newLi = document.createElement("li")
    newLi.innerHTML = `${movieTitle}`
    movieList.appendChild(newLi)

})

console.log(movieTitles)
// movieList.appendChild(movieTitles)
// addMoviesToDom(movieTitles)






// function addMoviesToDom(movieArray) {
//         let newLi = movieArray.forEach(item => document.createElement("li"))
//         // newLi.innerHTML = `${item}`
//         // movieList.appendChild(newLi)
        
//         console.log(typeof newLi)
//         return newLi
// }

