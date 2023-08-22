'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?');
//     const b = +prompt('На сколько оцените его?');
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         console.log('Good!');
//         personalMovieDB['movies'][a] = b;
//     } else {
//         console.log('Error!');
//         i--;
//     }
// }

let i = 0;
while (i < 2) {
    i++;
    const a = prompt('Один из последних просмотренных фильмов?');
    const b = +prompt('На сколько оцените его?');
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB['movies'][a] = b;
    } else {
        console.log('Error');
        i--;
    }
}
// if (personalMovieDB['count'] < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } if (personalMovieDB['count'] > 10 && personalMovieDB['count'] < 30) {
//     console.log('Вы классичесий зритель');
// } if (personalMovieDB['count'] > 30) {
//     console.log('Вы киноман');
// }
console.log(personalMovieDB);
