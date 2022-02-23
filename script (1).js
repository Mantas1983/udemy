/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания


const numberOfFilms = +prompt('kiek filmu jus perziurejote?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// pirma uzduotis..automatizavima
for (let i = 0; i < 2; i++) {
    const a = prompt('paskutinis matytas filmas?', ''),
          b = prompt('keliais balais ji vertinate?', '');
// antra uzduotis
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// trecioji uzduotis
if(personalMovieDB.count < 10){
      console.log('perziurejote mazai filmu');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log('jus geras ziurovas');
}else if(personalMovieDB.count >= 30){
      console.log('jus nuostabus ziurovas');
}else{
      console.log('ivyko klaida');
}
console.log(personalMovieDB);