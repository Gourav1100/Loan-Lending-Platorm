import react from "react";
import "./market.css";
import Loancard from "../../components/card/card.js";

class Market extends react.Component {
    render(){
        var res = fetch ("localhost:5000/api/database", {
            method: "GET",
            body: {
                type: "LoanOffer",
            }
        }).json();
        alert(res);
        return (
            <>
                This is Market.
            </>
        );
    }
}



export default Market;