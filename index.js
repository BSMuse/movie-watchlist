import Film from "/film.js"

let filmData = ""

const searchValue = document.getElementById('search').value

async function getData(value) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=ecf8d912&t=${value}there+will+be+blood`)
    const data = await res.json()
    filmData = data
} 

document.getElementById('submit').addEventListener('click', (e) => {
    (e).preventDefault
    getData(searchValue)
    console.log
    document.getElementById('movies').innerHTML = new Film(filmData).getFilmHtml()
})


getData()
console.log(filmData)