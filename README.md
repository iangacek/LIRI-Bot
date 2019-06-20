# LIRI-Bot

### Overview

This LIRI Bot application is a Language Interpretation and Recognition Interface application designed for the UMN Coding Bootcamp's homework assignment by Ian Gacek. It is a command line application that will provide data from 3 different APIs - Spotify, OMDB, and BandsInTown.

### Organization

This LIRI application primarily functions from the `liri.js` file, with three different functions being contained in the file.

## Instructions

To run LIRI, open git bash and navigate to the folder containing `liri.js`. Perform the follow command to install the proper node packages:

`npm install`.

If the function above does not work, run the following four commands:

`npm install node-spotify-api`
`npm install axios`
`npm install moment`
`npm install fs`

To perform a song search on Spotify, type the following command:

`node liri.js spotify-this-song "INSERT SONG NAME HERE"`

To perform a movie search via OMDB, type the following command:

`node liri.js movie-this "INSERT MOVIE TITLE HERE"`

To perform a search for venues a band is playing at, type the following command:

`node liri.js concert-this "INSERT BAND NAME HERE"`

## Screenshots

Spotify example:

![Spotify example](https://github.com/iangacek/liri-node-app/blob/master/assets/screenshots/Spotify-example.PNG)

OMDB example:

![OMDB example](https://github.com/iangacek/liri-node-app/blob/master/assets/screenshots/OMDB-example.PNG)

BandsInTown example:

![BandsInTown example](https://github.com/iangacek/liri-node-app/blob/master/assets/screenshots/BandsInTown-example.PNG)

## Technologies included in this application: 

`node-spotify-api`:
![node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

`axios`:
![axios](https://www.npmjs.com/package/axios)

`OMDB API`:
![OMDB](http://www.omdbapi.com/)

`BandsInTown API`:
![BIT API](http://www.artists.bandsintown.com/bandsintown-api)

`moment`:
![moment](https://www.npmjs.com/package/moment)

`file system`:
`[fs](https://www.npmjs.com/package/file-system)



## Credits

Developed by Ian Gacek - 2019. Collaborative contributions by John Blackshear, Vincent Romine, Michaela Banczak, and Raxem Mohamed