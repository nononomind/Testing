"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("Его оценка?");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно довольно мало фильмов :)");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log("Вы не ввели жанр, или нажали отмена.")
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }  
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр: ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;    
        } else {
            personalMovieDB.privat = true;
        }
    },
};


