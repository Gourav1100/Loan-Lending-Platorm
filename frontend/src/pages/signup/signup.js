// components
import react from "react";
import "./signup.css";
import { Container, Row, Col, Stack, InputGroup, FormControl } from "react-bootstrap";
import Header from "../../components/header/header";
import { GoogleLogin } from "react-google-login";
// icons
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";
import google from "../../icons/google.png";
// css
import "../../common.css";
import Footer from "../../components/footer/footer";

class Signup extends react.Component {
  submit = (event) => {
    event.preventDefault();
  }
  onSuccess = (res) => {
    console.log(`[ Signup Success ] Current User: ${res.profileObj}`)
  };
  onFailure = (res) => {
    console.log("[ Signup Failed ] res: ", res);
  }

  render() {
    return (
    <>
        <Header />
        <Container>
          <Row className="p-2 mt-2 mb-2">
            <Col xs={{ span: 1 }} md={{ span: 2 }}  lg={{span: 3}} xl={{span: 4}}/>

            <Col xs={{ span: 10 }} md={{ span: 8 }} lg={{span: 6}} xl={{span: 4}}>
              <form onSubmit={this.submit}>
                  
                <Stack gap={2}>

                <br></br>
                  <br></br>
                  <h2>Personal Details:</h2>
                  <br></br>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={padlock}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Phone"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Address"
                      aria-label="address"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup> 
                  
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Aadhaar Number"
                      aria-label="aadhaarnumber"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Pan Number"
                      aria-label="pannumber"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img>Upload Your Photo</InputGroup.Text>
        
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                        Upload!
                        </button>
                    </div>
                  </InputGroup>
                  <br></br>
                  <br></br>
                  <h2>Bank details</h2>
                  <br></br>
                  <br></br>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Bank Name"
                      aria-label="bankname"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Account Number"
                      aria-label="accountnum"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Branch"
                      aria-label="branch"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="IFSC code"
                      aria-label="ifsccode"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="CTC"
                      aria-label="ctc"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img className="img_size" src={userimg}></img> Salary Slip </InputGroup.Text>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                        Upload!
                        </button>
                    </div>
                  </InputGroup>
                  


                  <button
                    className="button_bg p-2"
                    onClick={this.clicked}>
                    SignUp
                  </button>
                </Stack>
              </form>
            </Col>

            <Col xs={{ span: 1 }} md={{ span: 2 }} lg={{span: 3}} xl={{span: 4}}/>
          </Row>

        </Container>
        <Footer />

    </>
    );
  }
  
}

export default Signup;
