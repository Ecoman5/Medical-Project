import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../styles/contactsec4.css";

const Contactsec4 = () => {
  return (
    <div>
      <section className="C4">
        <Row className="g-2">
          <form>
            <h2>Send us a message</h2>
            <div className=" d-flex gap-3 justify-content-center  ">
              <input
                className="input ps-3 "
                type="text"
                placeholder="Your Name*"
              />
              <input
                className="input ps-3 "
                type="number"
                placeholder  ="Phone*"
              />
            </div>
            <input className="inputt ps-3 " type="email" placeholder="Email*" />
            <textarea name="" id="" className="inputtt"></textarea>
            <button className="snd">Send Message</button>
          </form>
        </Row>
      </section>
    </div>
  );
};

export default Contactsec4;
