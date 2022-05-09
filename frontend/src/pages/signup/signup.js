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
  avatar = null;
  sslip = null;
  submit = (event) => {
    event.preventDefault();
    for(var i=0;i<event.target.length;i++){
      if(event.target[i].name !=="sslips" && event.target[i].name !== "avatar" && (event.target[i].value==="" || event.target[i].value===null)){
        alert(`Please fill the required field : '${event.target[i].name}' .`);
        return false;
      }
    }
    if(this.sslips === null || this.sslips === "" ){
      alert(`Atleast one salary slip is required.`)
      return false;
    }
    axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
      username: event.target.username,
      name: event.target.name,
      password: event.target.password,
      phone: event.target.phone,
      email: event.target.email,
      address: event.target.address,
      aadharnum: event.target.aadharnum,
      pannum: event.target.pannum,
      photo: this.avatar,
      noloans: 0,
      loansrepaid: 0,
      country: event.target.country,
      bankname: event.target.bankname,
      accountno: event.target.accountno,
      branch: event.target.branch,
      icode: event.target.icode,
      ctc: event.target.ctc,
      sslip: this.sslips,
    }).then((res)=>{
      res=res.json();
      if(res.success === true){
        window.location.href("/dashboard");
        return true;
      }
      alert(`Error occured, error message: ${res}`);
      return false;
    })
  }
  loadimages = (event) =>{
    if(event.target.files.length>15){
      alert(`Max number of files : 15 , got ${event.target.files.length} !`)
      event.target.value = null;
      event.target.files = null;
      return false;
    }
    for(var i=0;i<event.target.files.length;i++){
      if(!event.target.files.item(i).type.startsWith("image/")){
        alert(`File : ${event.target.files[i].name} is not an accepted image format.`)
        event.target.files = null;
        event.target.value = null;
        if(event.target.name==="sslips"){
          this.sslips=[];
        }
        else if(event.target.name==="avatar"){
          this.avatar="";
        }
        return false;
      }
    }
    console.log(event.target.name==="sslips")
    if(event.target.name==="avatar"){
      this.avatar = event.target.files[0];
    }
    else if(event.target.name==="sslips"){
      this.sslips = event.target.files;
    }
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
                      placeholder="Country"
                      name="country"
                      aria-label="country"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Aadhaar Number"
                      aria-label="aadhaarnum"
                      name="aadhaarnum"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><img alt="form_image" className="img_size" src={userimg}></img></InputGroup.Text>
                    <FormControl
                      placeholder="Pan Number"
                      aria-label="pannum"
                      name="pannum"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3 ">
                  <InputGroup.Text id="basic-addon1">Avatar</InputGroup.Text>
                    <FormControl
                      type="file"
                      name="avatar"
                      onChange={this.loadimages}
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
                      name="accountno"
                      aria-label="accountno"
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
                      name="icode"
                      aria-label="icode"
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
                      onChange={this.loadimages}
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
