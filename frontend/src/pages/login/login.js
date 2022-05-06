import react from "react";
import "./login.css";
import {
  Container,
  Row,
  Col,
  Stack,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";

class Login extends react.Component {
  clicked = (event) => {
    alert("clicked");
  };
  render() {
    return (
      <>
        <Container classname="">
          <Row>
            <Col xs={{ offset: 4, span: 4 }}>
              <Stack gap={2} className="my-auto vertical-center">
                <InputGroup className="mb-3 ">
                  <InputGroup.Text id="basic-addon1"><img className = "userimg" src = {userimg}></img></InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3 align-items-center">
                  <InputGroup.Text id="basic-addon1"><img className = "padlock" src = {padlock}></img></InputGroup.Text>
                  <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <Button onClick={this.clicked} variant="secondary">
                  Login
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
