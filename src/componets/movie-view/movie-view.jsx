import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const MovieView = ({ movie, onBackClick }) => {
   return (
      <Row className="my-5 justify-content-center">
      <Col md={5} >
          <img src={movie.ImagePath} alt="movie cover" className="img-fluid"/>
      </Col>
      <Col md={3}>
          <div className="my-1">
              <span className="h1">{movie.Title}</span>
          </div>
          <div className="my-1">
              <span className="h6">Description: </span>
              <span>{movie.Description}</span>
          </div>
          <div className="my-1">
              <span className="h6">Director: </span>
              <span>{movie.Director.Name}</span>
          </div>
          <div className="my-1">
              <span className="h6">Genre: </span>
              <span>{movie.Genre.Name}</span>
          </div>
          <Button onClick={onBackClick} variant="link">Back</Button>
      </Col>
  </Row>
    );
    /* return (
        <div>
            <div>
                <img src={movie.ImagePath} alt="movie cover"/>
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director.Name}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.Genre.Name}</span>
            </div>
            <div>
                <span>Year: </span>
                <span>{movie.Year}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );*/
  };

