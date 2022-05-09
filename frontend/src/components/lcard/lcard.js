import react from "react";
import {
    Card,
    Table,
    Container,
} from "react-bootstrap";


class Lcard extends react.Component {
    render(props){
        
        return(
            <>
            <Container>
                <br></br>
                
                <Card className="blue">
          <Card.Header as="h5"></Card.Header>
          <Card.Body>
            <Card.Title>{this.props.requestid}</Card.Title>
            <Card.Text>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Borrower</th>
                    <th>Amount</th>
                    <th>Interest Rate (%)</th>
                    <th>Borrowing Period</th>
                    <th>Date of post</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.borrower}</td>
                    <td>{this.props.amount}</td>
                    <td>{this.props.interestrate}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.date}</td>
                  </tr>
                    
                    </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
                </Container>
                <hr className="h_break"></hr>
            </>
        );
    }
}

export default Lcard;