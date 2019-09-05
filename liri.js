// require("dotenv").config();
var request = require('request');


request(`https://www.omdbapi.com/?t=${process.argv[3]}&y=&plot=short&apikey=trilogy`, function (Title, Year, Rating, Rotten, Country, Language, Plot, Actors){
    console.log('Title:', Title);
    console.log('Year:', Year);
    console.log('Rating:', Rating);
    console.log('Rotten Tomatoes:', Rotten);
    console.log('Country:', Country);
    console.log('Language:', Language);
    console.log('Plot:', Plot);
    console.log('Actors:', Actors);
});

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

