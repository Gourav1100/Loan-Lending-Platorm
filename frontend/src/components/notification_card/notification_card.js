import react from "react";
import { InputGroup, FormControl, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class NotificationCard extends react.Component {
  render(props) {
    return (
      <>
        <Card className="blue">
          <Card.Header as="h5"></Card.Header>
          <Card.Body>
            <Card.Text>{this.props.notificationtext}</Card.Text>
          </Card.Body>
        </Card>
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default NotificationCard;
