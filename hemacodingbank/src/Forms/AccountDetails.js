import React from "react";
import './AccountDetails.css';
import logoImage from "../../src/Images/Logo.png";

const AccountDetails = ({customer, updatedBalance}) => {
  return (
    <div className="account-container">
      <div className="image-account-container"></div>
      <div className="text-account-container">
      <img src={logoImage} alt="Hema Coding Bank logo" />

      <h2>Account Details :</h2>

      <p>Username: {customer.username}</p>
      <p>Account Number: {customer.accountNumber}</p>
      <p>Branch: {customer.branch}</p>
      <p>Phone Number: {customer.phoneNumber}</p>
      {/* <p>Available Balance:{customer.balance}</p> */}
      <p>Available Balance:
        <span style={{color:"green", fontSize:"24px", fontWeight:"600"}}> {updatedBalance === 0 ? customer.balance : updatedBalance}</span> Balance</p>

      

    </div>
    </div>
  );
};

export default AccountDetails;
