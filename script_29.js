/* Задание на урок:

1) Первую часть задания повторить по уроку

*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
console.log(numberOfFilms);

function start (){
   
//console.log(numberOfFilms);
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
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



function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');  
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }      
    }
}
rememberMyFilms();

function detectPersonalLevel (){
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
       console.log("Вы киноман") ;
    }else  {
        console.log("Произошла ошибка") ;
     }  
}

detectPersonalLevel();

console.log(personalMovieDB);

/*2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы*/


function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

/* 3. Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/

function writeYourGenres () {
    let genre;
    for (let i = 1; i <=3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //personalMovieDB.genres.push(genre);
        //или 
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


