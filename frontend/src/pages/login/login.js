import react from "react";
import "./login.css";
import {
  Container,
  Row,
  Col,
  Stack,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";
import google from "../../icons/google.png";
import "../../common.css";

var old_classes = {

};

class Login extends react.Component {
  submit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
  };
  check = (event) => {
    console.log(event.target.value);
  }
  render() {
    return (
      <>
        <Container>
          <Row className="vcon">
            <Col xs={{ span: 1 }} md={{ span: 3 }} lg={{ span: 4 }} />
            <Col xs={{ span: 10 }} md={{ span: 6 }} lg={{ span: 4 }}>
              <form onSubmit={this.submit}>
                <Stack gap={2}>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg} alt="username"></img></InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="username"
                      onKeyUp={this.check}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={padlock}  alt="password"></img></InputGroup.Text>
                    <FormControl
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      name="password"
                      onKeyUp={this.check}
                    />
                  </InputGroup>

                  <button type="submit" className="lg_font button_bg p-1" >
                    Login
                  </button>
                  <hr className="h_break"></hr>
                  <button type="submit" className="button_bg">
                    Sign in with <img className="img_size" src={google} alt="Google" />
                  </button>
                  <hr className="h_break"></hr>
                  <div>
                    Didn't have an account ? <a href="/signup">Signup</a>
                  </div>
                </Stack>
              </form>

            </Col>
            <Col xs={{ span: 1 }} md={{ span: 3 }} lg={{ span: 4 }} >
            </Col>

          </Row>

        </Container>

      </>
    );
  }
}

export default Login;
