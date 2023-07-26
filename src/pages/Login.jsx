import React from "react";
import logo from "../assets/Logo.png";
import Stella from "../assets/Stella.png";
import "../styles/login.css";
import facebk from "../assets/facebk.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bbb">
      <div className="d-md-flex justify-content-md-around log">
        <center className="fform">
          <div className="medkit">
            <Link to="/">
              <img className="mmo" src={logo} alt="logo" />
            </Link>
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
              <p>Forgot your password?</p>
            <button className="btn">Log In</button>
            <div className="spa">
              <p className="pp">
                Don’t have an account?{" "}
                <Link to="/signup">
                  <span> Sign Up </span>
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

export default Login;
