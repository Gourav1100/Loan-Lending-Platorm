// components
import react from "react";
import "./signup.css";
import { Container, Row, Col, Stack, InputGroup, FormControl } from "react-bootstrap";
import Header from "../../components/header/header";
// icons
import userimg from "../../icons/user.png";
import padlock from "../../icons/padlock.png";
import axios from "axios";
// css
import "../../common.css";
import Footer from "../../components/footer/footer";

class Signup extends react.Component {
  submit = (event) => {
    event.preventDefault();
    console.log(event.target);

    // var reader = new FileReader();
    
    // console.log(readasData);
  }
  loadimages = () =>{
    this._readFileDataUrl(this,function(err,files){
          if(err){return}
            console.log(files)
    });
  }
  _readFileDataUrl = (input,callback)=>{
    var len=input.files.length,_files=[],res=[];
    var readFile=function(filePos){
        if(!filePos){
            callback(false,res);
        }else{
            var reader=new FileReader();
            reader.onload=function(e){              
                res.push(e.target.result);
                readFile(_files.shift());
            };
            reader.readAsDataURL(filePos);
        }
    };
    for(var x=0;x<len;x++){
        _files.push(input.files[x]);
    }
    readFile(_files.shift());
};

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

                  <h2 style={{"width": "100%", "text-align": "center"}}>Personal Details</h2>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      name = "username"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={padlock}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Password"
                      name = "password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Name"
                      name = "name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Phone"
                      name = "phone"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Email"
                      name="email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Address"
                      name="address"
                      aria-label="address"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup> 
                  
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Aadhaar Number"
                      aria-label="aadhaarnumber"
                      name="aadhaarnumber"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Pan Number"
                      aria-label="pannumber"
                      name="pannumber"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                  <InputGroup.Text id="basic-addon1">Avatar</InputGroup.Text>
                    <FormControl 
                      type="file"
                      name="avatar"
                      aria-label="avatar"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <h2 style={{"width": "100%", "text-align": "center"}} className="mt-4 mb-4">Bank Details</h2>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Bank Name"
                      name="bankname"
                      aria-label="bankname"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Account Number"
                      name="accountnum"
                      aria-label="accountnum"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Branch"
                      name="branch"
                      aria-label="branch"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="IFSC code"
                      name="ifsccode"
                      aria-label="ifsccode"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="CTC"
                      name="ctc"
                      aria-label="ctc"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">Salary Slip </InputGroup.Text>
                    <FormControl 
                      type="file"
                      name="sslips"
                      onChange= {this.loadimages}
                      aria-label="sslips"
                      aria-describedby="basic-addon1"
                      multiple
                    />
                  </InputGroup>
                  <button
                    className="button_bg p-2"
                    type="submit">
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
