// imports
import Loancard from "../../components/card/card.js";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
=======
import react from "react";
import axios from "axios";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import { Container } from "react-bootstrap";
// css
import "./market.css";
>>>>>>> ac163ca4f8950849f6aa86f3294cb8e4a7151dea

class Market extends react.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            DataisLoaded: false,
        };
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/database?type=LoanOffer&method=GET").then((res) => {
            this.setState({
                data: res.data.message,
                DataisLoaded: true,
            })
        });
    }
    render(){
<<<<<<< HEAD
=======
        const {data, DataisLoaded} = this.state;
        if(!DataisLoaded){
            return (<>Data is being loaded... Please wait</>)
        }
>>>>>>> ac163ca4f8950849f6aa86f3294cb8e4a7151dea
        return (
            <>
                <Header />
                <Container className="p-md-2 p-5 mt-2 mb-2">
                    {
                        data.map((item)=>{
                            return (<>
                                <Loancard borrower={item.borrower} ammount={item.ammount} interestrate={item.interestrate} time={item.time} date={item.date} />
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