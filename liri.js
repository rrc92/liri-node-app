require("dotenv").config();
var keys = require("./keys.js");
const axios = require('axios');
var request = require('request');
var ToDo =process.argv[2];
var movie = process.argv.slice(3).join('');
var artist = process.argv.slice(3).join('');

 if(ToDo=="movie-this"){
    
    axios.get('https://www.omdbapi.com/?t='+ movie + '&y=&plot=short&apikey=trilogy')
    .then(function (response) {
      // handle success
      console.log('Title:',response.data.Title);
      console.log('Year:',response.data.Year);
      console.log('Ratings:',response.data.Ratings);
      console.log('Country:',response.data.Country);
      console.log('Language:',response.data.Language);
      console.log('Plot:',response.data.Plot);
      console.log('Actors:',response.data.Actors);
    })
 }
 if(ToDo=="concert-this"){
    
    axios.get('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp')
    .then(function (response) {
     
      console.log('Venue:',response.data[0].venue.name);
      console.log('City:',response.data[0].venue.city);
      console.log('Datetime:',response.data[0].datetime);
      

      console.log('Venue:',response.data[1].venue.name);
      console.log('City:',response.data[1].venue.city);
      console.log('Datetime:',response.data[1].datetime);

      console.log('Venue:',response.data[2].venue.name);
      console.log('City:',response.data[2].venue.city);
      console.log('Datetime:',response.data[2].datetime);
    
    })
 }


var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

