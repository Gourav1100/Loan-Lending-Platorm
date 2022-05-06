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
import google from "../../icons/google.png";
import "../../common.css"

class Login extends react.Component {
  clicked = (event) => {
    alert("clicked");
  };
  render() {
    return (
      <>
        <Container>
          <Row className="vcon">
            <Col xs={{span: 1 }} md = {{span : 3}} lg = {{span : 4}} />
            <Col xs={{span: 10 }} md = {{span : 6}} lg = {{span : 4}}>
              <Stack gap={2}>
                <InputGroup className="mb-3 ">
                  <InputGroup.Text id="basic-addon1"><img className = "img_size" src = {userimg}></img></InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3 ">
                  <InputGroup.Text id="basic-addon1"><img className = "img_size" src = {padlock}></img></InputGroup.Text>
                  <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <button className = "button_bg p-1" onClick={this.clicked}>
                  Login
                </button>
                <hr className="h_break"></hr>
                <button className = "button_bg   "><span className="lg_font">Sign in with</span> <img className = "img_size" src = {google}></img></button>
                <hr className="h_break"></hr>
                
            
              </Stack>
              
            </Col>
            <Col xs={{span: 1 }} md = {{span : 3}} lg = {{span : 4}} />
          </Row>
          
        </Container>
     
      </>
    );
  }
}

export default Login;
