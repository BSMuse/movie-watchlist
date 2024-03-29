let watchList = JSON.parse(localStorage.getItem('watchList'))
const render = () => {
    if (watchList == null) {
        document.querySelector('.search-container').style.display='block'
    } else{
        document.querySelector('.search-container').style.display='none'
        watchList.forEach( (movie) => {
        document.getElementById('movies').innerHTML += `<div class='movie'>${movie}</div>`
        click()
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
