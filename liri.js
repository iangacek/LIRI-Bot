require("dotenv").config('./*.env');
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var fs = require("fs");
var spotify = new spotify(keys.spotify);

var inputString = process.argv;
// Choses app
var appCommand = inputString[2];
// Choses input
var userInput = inputString[3];

function mySwitch(appCommand) {
    switch (appCommand) {
        // Calls the Spotify function
        case "spotify-this-song":
            getSpotify();
            break;
        // Calls the OMDB function    
        case "movie-this":
            getMovie();
            break;
        // Calls Other Function
        case "do-what-it-says":
            doWhatItSays();
            break;
    }

    // Spotify Search function
    function getSpotify() {
        spotify.search({ type: 'track', query: userInput, limit: 5 }, function (error, data) {
            if (!error) {
                for (var i = 0; i < data.tracks.items.length; i++) {
                    var songData = data.tracks.items[i];
                    console.log("Artist: " + songData.artists[0].name);
                    console.log("Song: " + songData.name);
                    console.log("Preview URL: " + songData.preview_url);
                    console.log("Album: " + songData.album.name);
                    console.log("----------");
                }
            } else {
                console.log('An error has occurred. Please try again.');
            }
        });
    }

    // OMDB Search function
    function getMovie() {
        var movieName = userInput;
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
        axios.get(queryUrl).then(
            function (response) {
                console.log("----------");
                console.log("Movie title: " + response.data.Title + "\n");
                console.log("Year released: " + response.data.Year + "\n");
                console.log("IMDB Rating: " + response.data.imdbRating + "\n");
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n");
                console.log("Countries movie was produced in: " + response.data.Country + "\n");
                console.log("Language: " + response.data.Language + "\n");
                console.log("Movie Plot: " + response.data.Plot + "\n");
                console.log("Actors/Actresses in the movie " + response.data.Title + ": " + response.data.Actors + "\n");
                console.log("----------")
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

    function doWhatItSays() {
        fs.readFile("./random.txt", "utf8", function (error, data) {
            if (!error);
            console.log(data.toString());
        });
    }

}
mySwitch(appCommand);