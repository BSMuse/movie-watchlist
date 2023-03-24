let watchList = JSON.parse(localStorage.getItem('watchList'))
console.log(watchList)

const render = () => {
    const moviesContainer = document.getElementById('movies')
    moviesContainer.innerHTML = ''
    
    if (watchList == null) {
        document.querySelector('.search-container').style.display = 'block'
    } else {
        document.querySelector('.search-container').style.display = 'none'
        watchList.forEach((movie) => {
            const movieDiv = document.createElement('div')
            movieDiv.classList.add('movie')
            movieDiv.textContent = movie
            movieDiv.addEventListener('click', click)
            moviesContainer.appendChild(movieDiv)
        })
    }
}

const click = () => {
    document.querySelectorAll(".list-btn").forEach(function(button){
        button.addEventListener('click', function(e) {
            const target = watchList.filter(movie => !movie.includes(e.target.parentElement.parentElement.innerHTML))
            watchList = target
            localStorage.setItem('watchList', JSON.stringify(target))
            document.getElementById('movies').innerHTML =""
            render()
        })
    }) 
}

render()
