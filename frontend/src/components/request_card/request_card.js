import react from "react";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import "./request_card.css";
import tick from "../../icons/tick.png";
import cross from "../../icons/remove.png";
import Table from "react-bootstrap/Table";

class RequestCard extends react.Component {
  render(props) {
    var success = window.sessionStorage.getItem("finalstatus");
    return (
      <>
        <Card className="blue">
          <Card.Header as="h5"></Card.Header>3
          <Card.Body>
            <Card.Title>
              {this.props.requestid}
              <img src={success ? tick : cross} className="img_size" />
            </Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Lender</th>
                    <th>Amount</th>
                    <th>Interest Rate</th>
                    <th>Borrowing Period</th>
                    <th>Disposal Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.lender}</td>
                    <td>{this.props.amount}</td>
                    <td>{this.props.interestrate}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.finaldate}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default RequestCard;