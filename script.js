"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов :)");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

