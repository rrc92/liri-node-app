// require("dotenv").config();
const axios = require('axios');
var request = require('request');
 
    axios.get(`https://www.omdbapi.com/?t=${process.argv.slice(3).join('')}&y=&plot=short&apikey=trilogy`)
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




var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

