import Film from "/film.js"

const render = () => document.getElementById('movies').innerHTML = new Film(filmData).getFilmHtml()
let filmData = ""
const search = document.getElementById('search')

async function getData(value) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=ecf8d912&s=${value}`)
    const data = await res.json()
    filmData = data
    const renderData = await render()
    renderData
} 

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    getData(search.value)
    filmData = ""
})
