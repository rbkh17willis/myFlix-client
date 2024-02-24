# myFlix-client
The client-side for an app called movie_api based on its existing server-side code (REST API and database).This is a single-page, responsive app which supports a MongoAtlas-hosted database.

The interface allows movie enthusiasts to create an account and browse through a collection of movies, finding out more information about each picture, as well as saving any particular favorites to their profile.

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
* Allows new users to register and gain access to database

Main View-
* Main page, returns all movies which can be filtered by ovie title
* Allows user to select a single movie to see more information about it
* Allows user to log out
* Allows user to navigate to a Profile View

Movie View-
* Shows a single movie that has been selected by user, basically a more detailed view containing full information about a particular movie

Profile View-
* Displays user details
* Allows user to update their information as well as delete their account
* Displays a user's favourite movies
* A user is able to add or remove movies from their favourites list
