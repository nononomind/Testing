"use strict";

const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDatabase.movies[a] = b;
personalMovieDatabase.movies[c] = d;

console.log(personalMovieDatabase);