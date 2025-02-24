/*
function Movie(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = [];
}

Movie.prototype.addRating = function(rating) {
    this.rating.push(rating)
}

Movie.prototype.averageRating = function() {
    let total = 0;
    for(let i = 0; i < this.rating.length; i++) {
        total += this.rating[i];
    }
    const res = total / this.rating.length;
    console.log(res);
}

//

function DramaMovie(title, director, releaseYear, genre) {
    Movie.call(this, title, director, releaseYear);
    this.genre = genre;
}

DramaMovie.prototype = Object.create(Movie.prototype)
DramaMovie.prototype.constructor = DramaMovie;

const dramaMovie1 = new DramaMovie("Titanic", "James Cameron", 1995, "Drama");

dramaMovie1.addRating(10);
dramaMovie1.addRating(6);
dramaMovie1.addRating(9.5);
dramaMovie1.averageRating();
*/

class Movie {
    constructor(title, director, releaseYear) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = [];
    }

    addRating(rating){
        this.rating.push(rating);
    }

    getAverageRating() {
        const total = this.rating.reduce((sum, rating) => sum + rating, 0);
        console.log(total / this.rating.length);
    }
}

class ComedyMovie extends Movie {
    constructor(title, director, releaseYear, genre) {
        super(title, director, releaseYear);
        this.genre = genre;
    }
}

const ComedyMovie1 = new ComedyMovie("Pink Flamingos", "John Waters", 1974, "Comedy");

ComedyMovie1.addRating(60)
ComedyMovie1.addRating(84)
ComedyMovie1.addRating(47)
ComedyMovie1.getAverageRating();