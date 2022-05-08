import react from "react";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";

class Loancard extends react.Component {
    render(props){

        return (
        <>
            <Card>
  <Card.Header as="h5"></Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </>
        );
    }
}

export default Loancard;