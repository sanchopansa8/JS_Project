"use strict";
let numberOfFilms;

function start() {
   
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you watched?", "");
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
function rememberMyFilms(){
for (let i = 0; i < 2;) {
    const film = prompt("One of recently wathed movies?", "");
    const filmMark = prompt("How would you assess it?", "");
    if(film != null && filmMark != null && film != "" && filmMark != "" && film.length < 50){
        personalMovieDB.movies[film] = filmMark;
        i++;
    }
}
}

rememberMyFilms();

function detectPersonalLevel(){
if(personalMovieDB.count < 10){
    console.log("Not many films");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Classic viewer");
}else if(personalMovieDB.count >= 30){
    console.log("You are cinemaddict!");
}else {
    console.log("Error occured");
}
}

detectPersonalLevel();


function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
       let genre = prompt("Your favourite genre #" + i);
       personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

