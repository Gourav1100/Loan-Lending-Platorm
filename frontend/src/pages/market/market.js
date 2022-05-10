// imports
import Loancard from "../../components/card/card.js";
import react from "react";
import axios from "axios";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import { Container } from "react-bootstrap";
// css
import "./market.css";

class Market extends react.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            DataisLoaded: false,
        };
    }
    componentDidMount(){
        axios.post("http://localhost:5000/api/database",{
            type: "LoanOffer",
            method: "GET",
        }).then((res) => {
            if(res.data.success===true){
                this.setState({
                    data: res.data.message,
                    DataisLoaded: true,
                })
                return true;
            }
            alert(`Error: ${res.data.message}`);
            return false;
        });
    }
    render(){
        const {data, DataisLoaded} = this.state;
        if(!DataisLoaded){
            return (<>Data is being loaded... Please wait</>)
        }
        return (
            <>
                <Header />
                <Container className="p-md-2 p-5 mt-2 mb-2">
                    {
                        data.map((item)=>{
                            return (<>
                                <Loancard borrower={item.borrower} amount={item.amount} interestrate={item.interestrate} time={item.time} date={item.date} />
                            </>);
                        })
                    }
                </Container>
                <Footer />
            </>
        );
    }
}



export default Market;
