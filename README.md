# myFlix-client
The client-side for an app called movie_api based on its existing server-side code (REST API and database).This application is a single-page, responsive app which supports a MongoAtlas-hosted database.

The interface allows movie enthusiasts to create an account and browse through a collection of movies, finding out more information about each picture, as well as saving any particular favorites to their profile.

## What Does This App Do?
Upon opening the app, the user will be prompted to login. If the user hasn't already created an account, they may signup. Once logged in, the user will be taken to the homepage, which is a catalog of movies. The user can click on a single movie to find more info on the genre, director, and description of the movie.

The user can also choose to add the film to their favorites list or return back to the homepage. They can view their favorites list via the profile tab where they can also change their user info.

## How Do I Run This On My Local Machine
Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

Clone the repository:
`git clone https://github.com/rbkh17willis/myFlix-client.git`

Navigate to the project directory:
`cd myFlix-client`

Then, install the dependencies:
`npm install`

Finally, start the app:
`npm start`

To run tests:
`npm test`

Once the app is running, open your web browser and navigate to [http://localhost:1234](http://localhost:1234) to access the app.

# Project dependencies
* Bootstrap
* Bootstrap-icons
* Moments
* Proptypes
* React
* React-bootstrap
* React-bootstrap-icons
* React-dom
* React-router
* React-router-dom
* Parcel
* Parcel/transformer-sass: (^2.10.2)

# Links to API
https://moviesapi-o4y1.onrender.com
https://github.com/rbkh17willis/movie_api

# Key Components
Login View-
* Allows users to log in with a username and password

Signup View-
* Allows new users to register and gain access to the data-base

Main View-
* Main page, returns all movies which can be filtered by movie title
* Allows the user to select a single movie to see more information about it
* Allows the user to log out
* Allows the user to navigate to a Profile View

Movie View-
* Shows a single movie that has been selected by the user, basically a more detailed view containing full information about a particular movie

Profile View-
* Displays user details
* Allows user to update their information as well as delete their account
* Displays a user's favorite movies
* A user can add or remove movies from their favorites list
