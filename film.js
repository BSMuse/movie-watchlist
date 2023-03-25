class Film {
    constructor(data) {
        Object.assign(this,data)
    }
    getFilmHtml() 
    {
        const { Title, Runtime, Genre, Plot, Poster, imdbRating } = this
               return `
                <div class="movie">
                        <img src="${Poster} onerror='src="/images/no_poster.png'>
                        <div class="movie-details">
                            <div class="title-and-rating">
                                <h3 id="title">${Title}</h3>
                                <img id="star" src="images/star.png">
                                <p id="rating">${imdbRating}</p> 
                            </div>
                            <div class="details">
                                <p id="time">${Runtime}</p>
                                <p id="genre">${Genre}</p> 
                                <div class='watchlist'>
                                    <button class="list-btn add-btn"></button>
                                    <p class='btn-label'>Watchlist</p>
                                    <p class='added'>Added to watchlist!</p>
                                </div>
                            </div>
                            <p id="description">${Plot}</p>  
                        </div>    
                </div> `
    }
}

export default Film