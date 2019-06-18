require("dotenv").config('./*.env');
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var spotify = new spotify(keys.spotify);

var inputString = process.argv;
// Choses app
var appCommand = inputString[2];
// Choses input
var userInput = inputString[3];

if (appCommand === "concert-this") {
    console.log();
} else if (appCommand === "spotify-this-song") {
    console.log();
} else if (appCommand === "movie-this") {
    console.log();
} else if (appCommand === "do-what-it-says") {
    console.log();
}

var getSpotify = function (songName) {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log(data.tracks);
    });
}
getSpotify();

var getMovie = function (movieName) {
    var movieName = userInput;
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    axios.get(queryUrl).then(
        function (response) {
            console.log("Movie title: " + response.data.Title);
            console.log("Year released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("Countries movie was produced in: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Movie Plot: " + response.data.Plot);
            console.log("Actors/Actresses in the movie " + response.data.Title + ": " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
getMovie();