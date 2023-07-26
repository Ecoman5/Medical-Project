import React from "react";
import logo from "../assets/Logo.png";
import Stella from "../assets/Stella.png";
import "../styles/appointment.css";
import Lines from "../assets/Lines.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Appointment = () => {
  return (
    <div>
      <div className="aa">
        <div className="d-md-flex justify-content-md-around log">
          <center className="fform">
            <div className="nv">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <h3>My Appointments</h3>
              <h4>Log Out</h4>
            </div>
            <div className="medkit">
              <h5>MAKE AN APPOINTMENT</h5>
              <img src={Lines} alt="" />
            </div>
            <form className="em">
              <input type="text" placeholder="First Name*" /> <br />
              <input type="text" placeholder="Last Name*" /> <br />
              <input type="number" placeholder="Phone no*" /> <br />
              <input type="date" placeholder="Appointment Date*" />
              <button className="btn">REQUEST</button>
            </form>
          </center>

          <div className="login">
            <img src={Stella} alt="Doctors" className="img-fluid" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Appointment;
