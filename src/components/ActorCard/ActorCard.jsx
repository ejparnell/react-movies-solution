import Card from 'react-bootstrap/Card';

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div className="actors-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://picsum.photos/${num}`} />
        <Card.Body>
          <Card.Title>{actor}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
