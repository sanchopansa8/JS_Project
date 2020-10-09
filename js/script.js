"use strict";

function toggleVisibleMyDB(){
    personalMovieDB.privat = !personalMovieDB.privat;
}

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = prompt("How many films have you watched?", "");
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2;) {
            const film = prompt("One of recently wathed movies?", "");
            const filmMark = prompt("How would you assess it?", "");
            if(film != null && filmMark != null && film != "" && filmMark != "" && film.length < 50){
                personalMovieDB.movies[film] = filmMark;
                i++;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Not many films");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Classic viewer");
        }else if(personalMovieDB.count >= 30){
            console.log("You are cinemaddict!");
        }else {
            console.log("Error occured");
        }
    },
    showMyDB: function (){
        if(!personalMovieDB.privat){
             console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 4; i++){
            let input = prompt(`Your favourite genre # ${i}?`);
            if(input === null || input === ""){
                i--;
            } else {
                personalMovieDB.genres[i-1] = input;
            }
        }

        this.genres.forEach((element, i, arr) => {
            console.log(`Favourite genre # ${i+1} - is ${element}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
 personalMovieDB.writeYourGenres();
toggleVisibleMyDB();

console.log(personalMovieDB.count);

