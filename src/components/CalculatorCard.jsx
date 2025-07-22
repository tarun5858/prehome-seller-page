import React from "react";
import icon from "../assets/img/account_balance_wallet.png";

const sellerpageCards = () => {
  return (
      <div
      // calculator-card
        className="col-xl-3 col-lg-3 col-md-3 col-12 grid-item calculator-card"
        style={{ backgroundColor: "#E3F7F4" }}
      >
        <div className="icon ">
          <img src={icon} alt="" width="52px" />
        </div>

        <div className=" calculator-p">
          <p>Worth Properties Under Management</p>
        </div>
      </div>
  );
};
export default sellerpageCards;
