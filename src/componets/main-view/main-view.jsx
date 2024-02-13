import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import "./main-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setselectedMovie] = useState(null);
    
    useEffect(() => {
        fetch("https://moviesapi-o4y1.onrender.com/movies")
        if (!token) {
            return;
          }
      
          fetch("https://moviesapi-o4y1.onrender.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
          })
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
    }, [token]);

  if (!user) {
    return (
      <Row className="justify-content-md-center mt-5">
        <Col md={5}>
          <LoginView 
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
              }}
            />
            or
          <SignupView />
        </Col>
      </Row>
    );
  }
  /* if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or
        <SignupView />
      </>
    ); 
  } */
    

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setselectedMovie(null)} />
        );
    }
      if (movies.length === 0) {
        return (
            <Row className="justify-content-md-center">
                <Col>
                    <p>The list is empty!</p>
                    <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
                </Col>
            </Row>
        );
    }
    

    return (
    <Row className="justify-content-center">
      {movies.map((movie) => (
          <Col md={6} lg={4} xl={3} className="mb-5 col-8" key={movie._id}>
              <MovieCard
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                      setselectedMovie(newSelectedMovie);
                  }}
              />
          </Col>
      ))}
      <Button className="my-5" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
    </Row>
);
/* if (movies.length === 0) {
  return <div>The list is empty!</div>;
}

return (
  <div>
      <button onClick={() => { 
      setUser(null); 
      setToken(null); 
      localStorage.clear();
      }}>Logout</button>

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
); */
};