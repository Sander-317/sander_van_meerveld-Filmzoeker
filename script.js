
console.log("test")
console.log(movies.length)

const movieList = document.getElementById("movie-list")
document.querySelectorAll(".radio-button").forEach(button => button.addEventListener("change", handleOnChangeEvent ))
movieList.innerHTML =""
addMoviesToDom(movies)

function handleOnChangeEvent(event){
    console.log(event.target)
    switch(event.target.value) {
        case "new-movies":
            console.log("new-movies")
            filterLatestMovies()
            break
        case "avengers":
            console.log("avengers")
            filterMovies("Avengers")
            break
        case "x-men":
            console.log("x-men")
            filterMovies("X-Men")
            break
        case "princess":
            console.log("princess")
            filterMovies("Princess")
            break
        case "batman":
            console.log("batman")
            filterMovies("Batman")
            break
        default:
            addMoviesToDom(movies)
    }
}


function filterMovies(filter){
    movieList.innerHTML =""
    let filteredMovies = []
    filteredMovies = movies.filter((item) => {
        return item.Title.includes(filter) 
        })
    console.log(filteredMovies)
    addMoviesToDom(filteredMovies)
}

function filterLatestMovies() {
    movieList.innerHTML =""
    filteredMovies = []
    filteredMovies = movies.filter((item) => {
        return item.Year >= "2014"
     })
        console.log(filteredMovies)
        addMoviesToDom(filteredMovies)

}

function addMoviesToDom(movieArray){
    movieArray.map((item) => {
        moviePoster = item.Poster
        let newPoster = document.createElement("img")
       newPoster.src = `${moviePoster}`
    movieList.appendChild(newPoster)
    })
}


