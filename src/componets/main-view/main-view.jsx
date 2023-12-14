import { useState } from "react";
import { MovieCard } from "../main-view/movie-card.jsx";
import { MovieView } from "../main-view/movie-view.jsx";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Outsiders",
      description:
        "A teen gang in rural Oklahoma, the Greasers are perpetually at odds with the Socials, a rival group.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DkeAQqJbmkCB-260JOG6DE70syFT2U5IXxgbR9akZBK-TYxZ1bgtDHjQtbfLmsSnnJs&usqp=CAU",
      genre: "Crime",
      director: "Francis Ford Coppola"
    },
    {
      id: 2,
      title: "Dead Poets Society",
      description:
        "A new English teacher, John Keating (Robin Williams), is introduced to an all-boys preparatory school that is known for its ancient traditions and high standards",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAOhZ6bapQHrvCFuHqlfcQ2XxJZ-NiVa6iWdId-DYdVRquzJV4-v2c1pFbE0yPOe2IfI&usqp=CAU",
      genre: "Comedy",
      director: "Peter Weir"
    },
    {
      id: 3,
      title: "Ghostbusters",
      description:
        "Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgkhp8FTPHihILqnvzpzleGCfzUCoZYGuclQ7jS_4iQbqY-Aip2lB1u7XUtszYV9goJA&usqp=CAU",
      genre: "Comedy",
      director: "Ivan Reitman"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieData={movie}
            onMovieClick={(newSelectedMovie) =>
              setSelectedMovie(newSelectedMovie)
            }
          />
        );
      })}
    </div>
  );
};

/* 
import React from "react";

export const MainView = () => {
  return (
    <>
      <div>
        <div>Eloquent JavaScript</div>
        <div>Mastering JavaScript Functional Programming</div>
        <div>JavaScript: The Good Parts</div>
        <div>JavaScript: The Definitive Guide</div>
        <div>The Road to React</div>
      </div>
      <button>Test</button>
    </>
  );
}
*/