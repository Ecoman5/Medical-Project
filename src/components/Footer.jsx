import React from 'react'
import "../styles/footer.css"
import Twitter from "../assets/twitter.png"
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <div>
      <div className="foot">
        <div className="find">
          <h3>Find & follow us</h3>
          <div className="icons">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p className="tel">
            Tel: <span>(233) 678-0202</span>
          </p>
          <p className="fax">
            Fax: <span>0300000025</span>
          </p>
          <p className="em">
            Email: <span> medkit@gmail.com</span>
          </p>
          <hr />
          <p className="copy">Copyright &copy; 2023 All Rights Reserved</p>
        </div>
      </div>
      <div className="foot-desk">
        <div className="med-desk">
          <img src={Logo} alt="" />
          <p>
            Access to medical services with Certified Medical <br /> <br /> Consultants on
            Medkit.
          </p>
          <p>Contact@medkit.com</p>
          <p>(233) 678-0202</p>
          <div className="icons">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="info">
          <h3>Information</h3>
          <p>Blog</p>
          <p>Special Offers</p>
          <p>F.A.Q</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="quick">
          <h3>Quick Links</h3>
          <p>Our Doctors</p>
          <p>Book an Appointment</p>
          <p>Free Consultation</p>
        </div>
        <div className="com">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer