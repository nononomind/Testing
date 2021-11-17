"use strict";

const numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 1; i <= numberOfFilms; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("Его оценка?");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }

    

// }
// console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов :)");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}