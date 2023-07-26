import React from "react";
import Card from "react-bootstrap/Card";
import mapm from "../assets/mapm.png";
import loc from "../assets/loc.png";
import phn from "../assets/phn.png";
import mail from "../assets/mail.png";
import "../styles/contact.css";
import Contactsec4 from "../components/Contactsec4";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bb">
      <Header />
      <div className="contact">
        <section className="C1">
          <center className="ade">
            <h3> Contact Us</h3>
          </center>
        </section>

        <div className="cont">
          <section className="C2">
            <div className=" shh ">
              <img src={loc} className="ic" alt="" />
              <p>1, Ogunlesi str, onipanu, Lagos.</p>
            </div>
            <div className=" shh ">
              <img src={phn} className="ic" alt="" />
              <p>(233) 768-0202 (234) 799-1020</p>
            </div>
            <div className=" shh ">
              <img src={mail} className="ic" alt="" />
              <p>www.medkit.com info@medkit.com</p>
            </div>

            <div className="remove">
              <Card className="car rounded-4 ">
                <Card.Subtitle className="mb-2 my-4  text-center fs-5">
                  98%
                </Card.Subtitle>
                <Card.Text className="mt-3 text-dark text-center fs-6">
                  24 Hours a Day 7 Days a Week
                </Card.Text>
              </Card>
            </div>
          </section>

          <section className="C3"></section>

          <Contactsec4 />
        </div>

        <section className="C5 my-5 d-block d-md-fle justify-content-around">
          <div className="get">
            <h4>Subscribe</h4>
            <p>Get our latest news & update regularly</p>
          </div>
          <div>
            <form  className="ffr d-flex justify-content-center flex-column">
              <input
                className="ty"
                type="email"
                placeholder="Type Email Address"
              />
              <button className="tyb">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
