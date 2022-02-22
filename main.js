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
