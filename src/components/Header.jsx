import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import image from "../assets/Logo.png";
import "../styles/header.css";
const Header = () => {
  return (
    <div className="id">
      <Navbar expand="lg" className="bg-body-white" id="Navbarr">
        <Container>
          <Navbar.Brand className="logo">
            <Link to="/">
              <img src={image} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar">
            <Nav className="ms-auto">
              <Link to="/" className="text-decoration-none" id="tap">
                HOME
              </Link>

              <Link to="/about" className="text-decoration-none" id="tap">
                ABOUT
              </Link>
              <div className="serve">
                <Link to="/services" className="text-decoration-none " id="tap">
                  SERVICES
                </Link>
              </div>
              <Link to="/contact" className="text-decoration-none" id="tap">
                CONTACT
              </Link>
              <div className="buttons">
                <Link to="/login" className="text-decoration-none " id="take">
                  Log In
                </Link>
                <Link to="/signup">
                  <div className="text-center">
                    <button type="submit"> Sign Up</button>
                  </div>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
