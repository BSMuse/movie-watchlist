class Film {
    constructor(data) {
        Object.assign(this,data)
    }
    getFilmHtml() {
        const { Title, Runtime, Genre, Plot, Poster, imdbRating } = this
            return `
            <div class="movie">
                    <img src="${Poster}">
                    <div class="movie-details">
                        <div class="title-and-rating">
                            <h3 id="title">${Title}</h3>
                            <img id="star" src="images/star.png">
                            <p id="rating">${imdbRating}</p> 
                        </div>
                        <div class="details">
                            <p id="time">${Runtime}</p>
                            <p id="genre">${Genre}</p> 
                            <button class="list-btn" id="add-btn"></button>
                            <p>Watchlist</p>
                        </div>
                        <p id="description">${Plot}</p>  
                    </div>    
                </div> `
    }
}

export default Film