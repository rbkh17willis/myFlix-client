import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://moviesapi-o4y1.onrender.com/movies")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const moviesFromApi = data.map((movie) => {
                    return {
                        _id: movie._id,
                        Title: movie.Title,
                        ImagePath: movie.ImagePath,
                        Description: movie.Description,
                        Year: movie.Year,
                        Genre: {
                            Name: movie.Genre.Name
                        },
                        Director: {
                            Name: movie.Director.Name
                        }
                    };
                });
                setMovies(moviesFromApi);
            });
    }, []);

    const [selectedMovie, setselectedMovie] = useState(null);

    if (selectedMovie) {
        let similarMovies = movies.filter((movie) => 
        {
            return movie._id !== selectedMovie._id && movie.Genre.Name === selectedMovie.Genre.Name;
        });
        if(similarMovies.length === 0) {
            return (
                <>
                    <MovieView movie={selectedMovie} onBackClick={() => setselectedMovie(null)} /><br />
                    <h2>Similar Movies</h2>
                    <p>There are no similar movies.</p>
                </>
            );
        } else {
            return (
                <>
                    <MovieView movie={selectedMovie} onBackClick={() => setselectedMovie(null)} /><br />
                    <h2>Similar Movies</h2>
                    {similarMovies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                                setselectedMovie(newSelectedMovie);
                            }}
                        />
                    ))}
                </>
            );
        }
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setselectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};