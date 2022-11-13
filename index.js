import Film from "/film.js"

const filmArray = []
let filmTitle = ""
let watchList = JSON.parse(localStorage.getItem('watchList'))
const search = document.getElementById('search')



const render = (array) => {
    let filmHtml = ""
    for (let i = 0; i < array.length; i++) {
    filmHtml += new Film(array[i]).getFilmHtml()
    }
    return filmHtml
}

const makeFilmArray = async (array) => { 
    for (let i = 0; i < array.length; i++) {
    getData(array[i])
    }
}

async function getTitle(value) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=ecf8d912&s=${value}`)
    const data = await res.json()
    filmTitle = data.Search.map((x) => x.Title)
    makeFilmArray(filmTitle)
} 


async function getData(array) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=ecf8d912&t=${array}`)
    const data = await res.json()
    const arrayPush = () =>  filmArray.push((data))
    arrayPush()
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.search-container').style.visibility='hidden'
    getTitle(search.value)
    document.getElementById('movies').innerHTML = render(filmArray)
    if (!filmTitle) {
        document.querySelector('#no-result').style.display='contents'
    } else {
            filmArray.length = 0
            filmTitle = ""
            const listBtn = document.querySelectorAll(".list-btn")
            listBtn.forEach(function(button){
                if(button.classList.contains('add-btn')){
                    button.addEventListener('click', function(e) {
                        button.classList.remove('add-btn')
                        button.classList.add('remove-btn')
                        let storeList = []
                        storeList.push(e.target.parentElement.parentElement.parentElement.parentElement.innerHTML)
                        watchList.push(storeList[0])
                        localStorage.setItem('watchList', JSON.stringify(watchList))
                        console.log(localStorage)
                        e.target.nextElementSibling.nextElementSibling.style.display='contents'
                        e.target.nextElementSibling.style.display='none'
                        e.target.style.display='none'
                    })
                }
            })
    }
}) 



