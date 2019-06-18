require("dotenv").config('./*.env');
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var spotify = new spotify(keys.spotify);

var getSpotify = function(songName) {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log(data.tracks);
    });
}
getSpotify();

var getMovie = function(movieName) {
    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
}

var inputString = process.argv;
var command = inputString[2];
var userInput = inputString[3];

if (command === "concert-this") {
    console.log();
} else if (command === "spotify-this-song") {
    console.log();
} else if (command === "movie-this") {
    console.log();
} else if (command === "do-what-it-says") {
    console.log();
}