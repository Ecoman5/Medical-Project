import React from "react";
import logo from "../assets/Logo.png";
import Stella from "../assets/Stella.png";
import "../styles/login.css";
import facebk from "../assets/facebk.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="d-md-flex justify-content-md-around log">
        <center className="fform">
          <img src={logo} alt="logo" />
          <div className="medkit">
            <h5>Log In to MedKit</h5>
            <img src={facebk} alt="" /> <img src={gmail} alt="" />{" "}
            <img src={insta} alt="" />
            <p>Or use your email address:</p>
          </div>
          <form className="email">
            <label htmlFor="Email">Email</label> <br />
            <input type="Email" placeholder="elo@techstudio.com" /> <br />
            <label htmlFor="Password">Password</label> <br />
            <input type="number" placeholder="Min 8 characters" />
            <Link to="/Appointment">
              <p>Forgot your password?</p>
            </Link>
            <button className="btn">Log In</button>
            <div className="spa">
              <p>
                Don’t have an account? <span> Sign Up </span>{" "}
              </p>
            </div>
          </form>
        </center>

        <div className="login">
          <img src={Stella} alt="Doctors" className="img-fluid" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
