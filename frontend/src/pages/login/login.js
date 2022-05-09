// components
import react from "react";
import { Container, Row, Col, Stack, InputGroup, FormControl } from "react-bootstrap";
import Header from "../../components/header/header";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
// icons
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";
import google from "../../icons/google.png";
// css
import "../../common.css";
import "./login.css";
import Footer from "../../components/footer/footer";

// Google Client ID
const GOOGLE_CLIENT_ID = "925813570837-d0fdjbfugemslhaq2hr1frf15rk8vl02.apps.googleusercontent.com"

class Login extends react.Component {
  submit = (event) => {
    event.preventDefault();
  }
  handleLogin = (googleData) => {
    const res = axios("http://localhost:5000/api/OAuth", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then( res => res.json() );
    console.log(res);
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="vcon">
            <Col xs={{ span: 1 }} md={{ span: 2 }}  lg={{span: 3}} xl={{span: 4}}/>

            <Col xs={{ span: 10 }} md={{ span: 8 }} lg={{span: 6}} xl={{span: 4}}>
              <form onSubmit={this.submit}>
                <Stack gap={2}>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={padlock}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <button
                    className="button_bg p-2"
                    onClick={this.clicked}>
                    Login
                  </button>
                  <hr className="h_break" />

                  <GoogleLogin
                      clientId={GOOGLE_CLIENT_ID}
                      onSuccess={this.handleLogin}
                      onFailure={this.handleLogin}
                      buttonText="Log in with Google"
                      cookiePolicy={'single_host_origin'}
                      className="botton_bg p-1"
                      isSignedIn={true}
                    />

                  <hr className="h_break" />
                  <div style={{"font-size": "1.2em"}}>
                  Didn't have an account ? <a style = {{'font-size': "1.2em"}} href="/signup">SignUp</a>
                  </div>
                </Stack>
              </form>
            </Col>

            <Col xs={{ span: 1 }} md={{ span: 2 }} lg={{span: 3}} xl={{span: 4}}/>
          </Row>

        </Container>
      </>
    );
  }
}

export default Login;
