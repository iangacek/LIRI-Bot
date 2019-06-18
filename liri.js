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
            doWhat();
            break;
    }

    // Spotify Search function
    function getSpotify() {
        spotify.search(
            {
                type: "track",
                query: userInput
            },
            function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                }

                var songs = data.tracks.items;

                for (var i = 0; i < songs.length; i++) {
                    console.log(i);
                    console.log(data);
                    console.log("song name: " + songs[i].name);
                    console.log("preview song: " + songs[i].preview_url);
                    console.log("album: " + songs[i].album.name);
                    console.log("-----------------------------------");
                }
            }
        );
    };


    // OMDB Search function
    function getMovie() {
        var movieName = userInput;
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
        axios.get(queryUrl).then(
            function (response) {
                console.log("----------");
                console.log("Movie title: " + response.data.Title);
                console.log("Year released: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
                console.log("Countries movie was produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Movie Plot: " + response.data.Plot);
                console.log("Actors/Actresses in the movie " + response.data.Title + ": " + response.data.Actors);
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
}
mySwitch(appCommand);