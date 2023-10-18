import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MovieCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.posterPath} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
          Released: {props.movie.releaseDate}
        </Card.Text>
        <Link to={`/movies/${props.movie.title}`}>
          <Button variant="primary">See Movie Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}