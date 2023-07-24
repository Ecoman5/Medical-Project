import React from "react";
import bell from "../assets/bell.png";
import "../styles/appointmentmodal.css";

const Appointmentmodal = () => {
  return (
    <div className="appmodal text-center">
      <div>
        <h5 className="text-white">Appointment Successful!</h5>
        <img src={bell} alt="bell" />
        <p>Go back to home page</p>
      </div>

      <hr />

      <button>Continue</button>
    </div>
  );
};

export default Appointmentmodal;
