import react from "react";
import "./market.css";
import Loancard from "../../components/card/card.js";

class Market extends react.Component {
    render(){
        var res = await fetch ("localhost:5000/api/database", {
            method: "GET",
            body: {
                type: "LoanOffer",
            }
        }).json();
        console.log(res);
        return (
            <>
                This is Market.
            </>
        );
    }
}



export default Market;