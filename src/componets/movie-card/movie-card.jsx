import PropTypes from "prop-types";
import "./movie-card.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card className="h-100 mt-5 card-shadow">
            <Card.Img variant="top card-img" src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Button onClick={() => onMovieClick(movie)} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};
/* export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            {movie.Title}
        </div>

    );
};*/

// define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,        
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};