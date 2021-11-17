"use strict";

const numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("Его оценка?"),
    c = prompt("Один из последних просмотренных фильмов?"),
    d = prompt("Его оценка?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);