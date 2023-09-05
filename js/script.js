'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms  == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    } 
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            console.log('Good!');
            personalMovieDB['movies'][a] = b;
        } else {
            console.log('Error!');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB['count'] < 10) {
        console.log('Что то слабенько');
    } if (personalMovieDB['count'] > 10 && personalMovieDB['count'] < 30) {
        console.log('Вы дефолтный киноман');
    } if (personalMovieDB['count'] > 30) {
        console.log('Вы фанатик фильмов');
    } else {
        console.log('Ошибка');
    }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB['privat'] == false) {
        console.log(personalMovieDB);
  }
}
showMyDB();

// function showMyDB(hidden) {
//    if (!hidden) {
//     console.log(personalMovieDB);
//    }
// }
// showMyDB(personalMovieDB['privat']);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB['genres'][i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres()

