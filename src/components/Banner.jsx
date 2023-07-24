import React from 'react'
import "../styles/banner.css"
import Doc from "../assets/doc.png"
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="ban">
        <div className="bban">
          <img className="pic" src={Doc} alt="" />
          <div className="bannn"></div>
        </div>
        <div className="ban-text">
          <h1>
            Get Access to Quick And <br />
            Confidential Medical Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
            lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium
            et adipiscing sociis commodo sit sem. Ac fusce vel facilisis
            pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
          </p>
          <button type="submit">Get Started</button>
          <div className="ban-text2">
            <h2>Dr. Raj Spencer</h2>
            <p>Consultant</p>
            <Link to="/Login" className='text-decoration-none btb'>
              <button type="submit">Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner