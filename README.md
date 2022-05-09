# Loan-Lending-Platorm
A web application based on node.js with mongoDB database deployed on Microsoft Azure cloud with an aim to provided customer to customer interaction for loan exchange.
<br>
<h1>The characteristics of the platform are:</h1>
<ul>
  <li>
    <b>Elimination of middle men :</b>
    <br>
    The platform is a customer to customer based personal loan lending system. Each user can act as a borrower as well as a lender, thus providing a self helping community which contributes towards mutual growth.
  </li>
  <li>
    <b>Secure and efficient mangement of data :</b>
    <br>
   <p> The data is easily available on the user profile. Borrower can reach a large audience at once and thus his/her chance of getting an optimal offer are increased. </p>
    <p>The user login is secured in the databse with his password being stored as a hash value. </p>
  </li>
  <li>
    <b>Secured Investment: </b>
    <br>
    <p>The CIBIL score of the user which is generated according to their previous transactions gives insight in the credibility of the borrower. The EMI and penalty on the user is also handled by the application thus easing the whole process for both parties.</p>
  </li>
  </ul>
  <br>
<h1>Components of the website</h1> 
<ul>
  <li>
    <b>Profile </b>
    <br>
    The profile displays the credentials of the user along with his transaction history. The transaction history includes all the loan offers and requests ever made by the user.
  </li>
  <li>
    <b>Market </b>
    <br>
   <p> The market is the place where all the users interact with each other. It contains all the loan requests by each user. On each loan request, the other users can "bargain" on the conditions asked by the borrower. </p>
  </li>
  </ul>
  <br>
  <h1>Operations </h1>
  <ul>
    <li>
      <b>Bid </b>
      <p>Bid or bargain is the reaction offer by a potential lender to a loan request. The lender changes some parameters of the loan request and sends to the borrower. The borrower now consider all the "bids" against his loan and chooses which suits him the best. The borrower is free to reject all the loan offers. </p>
      <p>Any user can make multiple "bids" against a loan request. This provides a free and flexible conversation between the parties. A rejection of a "bid" notifies the bid maker of the rejection and thus he/she can change his bid accordingly. </p>
    </li>
    <li>
    <b> EMI </b>
    <br>
    The borrower repays the debt in small amounts paid periodically. The EMI is calculated by the service. If the borrower fails to abide by the deadline, penalty is imposed which is proportional to the excess time taken.
    </li>
    <li>
      <b> Credibility (CRED) score </b>
      <br>
      <p>The "trust factor" of any user can be derived from his/her CRED score. This score is based on the previous history of tracnsaction by the user. A user who has paid his/her loans and EMIs on time will have more CRED score than other users. This ensures the security of investment by the lender.</p>
  </li>
  </ul>
    
<h1>Interaction and transaction are :</h1>
<ul>
  <li><b>Loan requests : </b></li>
    Each user can "request" for a loan. In this, he has to specify: 
    <ul>
      <li><em>Amount</em> he want to borrow.</li>
      <li><em>Interest rate</em> he is expecting. </li>
      <li><em>Time</em> for which he wants the loan. </li>
        </ul>
  After all this, other users can see his request in the <b>market</b> and then make a "bid" on the offer. 
  The charateristics of a loan request are:
  <ul>
    <li>The user can have only one active loan request at a time. </li>
    <li>There can be multiple "bids" against a loan request</li>
    <li>If the user agrees with the offer against his request, he can accept it and the loan processing would start. The request is removed from the market after this. </li>
    <li>Each request has a lifetime of 20 days. After this, the loan request is removed from the market.</li>
    <li>All of the loan requests by a user are saved against his user id in his all time transactions and are visible on his profile</li>
    <li>On the loan taken, if the user abides by the EMIs and the deadline, his CIBIL score is  increased, else decreament happen.
      
  </ul>
  </li>
  
  <li>
<li><b>Bidding</b></li>
<p>
  The bidding on any loan request can be done using the button provided on each card. This ensure ease of accessibility for the bidder.
  </p>
  </li>
  
  <li><b>Paying EMI<b></li>
  <p>
    
    
  
    
      
  
## Clone Repository 
```sh
git clone --recursive git@github.com:ShisuiMadara/Loan-Lending-Platorm.git
```

<p align="center">
  OR
 </p>

```sh 
git clone --recursive https://github.com/ShisuiMadara/Loan-Lending-Platorm.git
```

## Running server
```sh
npm install
cd frontend
npm install
cd ..
./run
```
