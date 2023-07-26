import React from "react";
import logo from "../assets/Logo.png";
import Stella from "../assets/Stella.png";
import "../styles/signup.css";
import facebk from "../assets/facebk.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bbb">
      <div className="d-md-flex justify-content-md-around log">
        <center className="fform">
          <div className="medkit">
            <Link to="/">
              <img className="imb" src={logo} alt="logo" />
            </Link>
            <h5>Create an Account</h5>
            <img src={facebk} alt="" /> <img src={gmail} alt="" />{" "}
            <img src={insta} alt="" />
            <p>Or use your email address:</p>
          </div>
          <form className="email">
            <label htmlFor="text">Full Name</label> <br />
            <input type="text" placeholder="Aisha Oyelola" /> <br />
            <label htmlFor="email">Email</label> <br />
            <input type="email" placeholder="aisha@gmail.com" /> <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" placeholder="Min 8 characters" />
            <button className="btn">Sign Up</button>
            <div className="spa">
              <p className="pp">
                Already a user?
                <Link to="/login">
                  <span> Log In </span>
                </Link>
              </p>
            </div>
          </form>
        </center>

        <div className="login">
          <img src={Stella} alt="Doctors" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
