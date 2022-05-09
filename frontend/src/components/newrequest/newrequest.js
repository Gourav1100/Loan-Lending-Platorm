import react from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  InputGroup,
  FormControl,
} from "react-bootstrap";

class Newrequest extends react.Component {
  render(props) {
    return (
      <>
        <Container>
          <Row className="">
            <Col
              xs={{ span: 1 }}
              md={{ span: 2 }}
              lg={{ span: 3 }}
              xl={{ span: 4 }}
            />

            <Col
              xs={{ span: 10 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
            >
              <form onSubmit={this.submit}>
                <Stack gap={2}>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                    placeholder = "Amount"
                    aria-label="Amount"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                    </InputGroup.Text>
                    <FormControl
                    placeholder = "Interest rate"
                    aria-label="Interest Rate"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">
                    </InputGroup.Text>
                    <FormControl
                    placeholder = "Borrowing Period"
                    aria-label="Borrowing Period"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup>
                  <button className="button_bg p-2" onClick={this.clicked}>
                    Place a Request
                  </button>
                  <hr className="h_break" />
                </Stack>
              </form>
            </Col>

            <Col
              xs={{ span: 1 }}
              md={{ span: 2 }}
              lg={{ span: 3 }}
              xl={{ span: 4 }}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Newrequest;
