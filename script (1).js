/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('kiek filmu jus praziurejote', '');
const personalMovieDB = {
  count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
const a = prompt('koks jusu paskutinis matytas filmas', '');
      b = prompt('keliais balais vertinate ji?', ''),
      c = prompt('koks jusu paskutinis matytas filmas', ''),
      d = prompt('keliais balais vertinate ji?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
