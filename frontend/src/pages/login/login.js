// components
import react from "react";
import { Container, Row, Col, Stack, InputGroup, FormControl } from "react-bootstrap";
import Header from "../../components/header/header";
import axios from "axios";
import Footer from "../../components/footer/footer";
// icons
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";
// css
import "../../common.css";
import "./login.css";
import Footer from "../../components/footer/footer";

class Login extends react.Component {
  submit = (event) => {
    event.preventDefault();
    if(event.target.email.value === null || event.target.email.value === "" || event.target.password.value === "" || event.target.password.value === null){
      alert("Plase Fill all the Fields.");
      return false;
    }
    axios.post("http://localhost:5000/api/database",{
      type: "Login",
      method: "GET",
      email: event.target.email.value,
      password: event.target.password.value,
    }).then((res)=>{
      console.log(res.data);
      if(res.data.success===true){
        window.sessionStorage.setItem("userid",res.data.message._id);
        window.location.replace("/dashboard");
      }
      alert(`Error: ${res.data.message}`)
      return false;
    })
  }

  render() {
    if(window.sessionStorage.getItem("userid")){
      window.location.replace("/dashboard");
    }
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
                      placeholder="Email"
                      aria-label="email"
                      name="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={padlock}></img></InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      aria-label="password"
                      name="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <button
                    className="button_bg p-2"
                    onClick={this.clicked}>
                    Login
                  </button>
                  <hr className="h_break" />
                  <div style={{"font-size": "1.2em"}}>
                  Didn't have an account ? <a id="signup" href="/signup">SignUp</a>
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
