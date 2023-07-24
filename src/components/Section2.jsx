import React from 'react'
import "../styles/section2.css"
import Line from "../assets/line.png"
import Bus from "../assets/bus.png"
import Med from "../assets/med.png";
import Clock from "../assets/clock.png";
import Jay from "../assets/jay.png"
import Ajay from "../assets/Ajay.png";
import Aisha from "../assets/Aisha.png";
import Stella from "../assets/Stella.png";
import Chat from "../assets/Chat.png"
import Call from "../assets/Call.png"
import Live from "../assets/Live.png"



const Section2 = () => {
  return (
    <div>
      <div className="sec2">
        <div className="medk">
          <h1>MEDKIT SPECIALITIES</h1>
          <img src={Line} alt="" />
        </div>
        <div className="hos">
          <div className="bus">
            <img src={Bus} alt="" />
            <h1>FASTEST AMBULANCE</h1>
            <p>
              We provide you with experienced and highly professional doctors
              with the aim of providing exceptional care.
            </p>
          </div>
          <div className="med">
            <img src={Med} alt="" />
            <h1>PROFESSIONAL DOCTORS</h1>
            <p>
              We provide you with experienced and highly professional doctors
              with the aim of providing exceptional care.
            </p>
          </div>
          <div className="clock">
            <img src={Clock} alt="" />
            <h1>BEST SERVICES</h1>
            <p>
              We are committed to providing healthcare services with the
              consideration of patients satisfaction. Our patients come first!
            </p>
          </div>
        </div>
        <div className="meet">
          <h1>MEET OUR DOCTORS</h1>
          <img src={Line} alt="" />
        </div>
        <div className="scroll">
          <div className="photo">
            <img src={Jay} alt="" />
            <h2>Dr. Jay Stephen</h2>
            <p>Optometrist</p>
            <div className="acc">
              <img src={Chat} alt="" />
              <img src={Call} alt="" />
              <img src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Ajay} alt="" />
            <h2>Dr. Ajay Verma</h2>
            <p>Gynecologist</p>
            <div className="acc">
              <img src={Chat} alt="" />
              <img src={Call} alt="" />
              <img src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Aisha} alt="" />
            <h2>Dr. Aisha Joe</h2>
            <p>Paediatrician</p>
            <div className="acc">
              <img src={Chat} alt="" />
              <img src={Call} alt="" />
              <img src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Stella} alt="" />
            <h2>Dr. Stella Maris</h2>
            <p>General Physician</p>
            <div className="acc">
              <img src={Chat} alt="" />
              <img src={Call} alt="" />
              <img src={Live} alt="" />
            </div>
          </div>
        </div>
        <div className="scroll-desk">
          <div className="photo">
            <img src={Jay} alt="" />
            <h2>Dr. Jay Stephen</h2>
            <p>Optometrist</p>
            <div className="acc">
              <img className="iconn" src={Chat} alt="" />
              <img className="iconn" src={Call} alt="" />
              <img className="iconn" src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Ajay} alt="" />
            <h2>Dr. Ajay Verma</h2>
            <p>Gynecologist</p>
            <div className="acc">
              <img className="iconn" src={Chat} alt="" />
              <img className="iconn" src={Call} alt="" />
              <img className="iconn" src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Aisha} alt="" />
            <h2>Dr. Aisha Joe</h2>
            <p>Paediatrician</p>
            <div className="acc">
              <img className="iconn" src={Chat} alt="" />
              <img className="iconn" src={Call} alt="" />
              <img className="iconn" src={Live} alt="" />
            </div>
          </div>
          <div className="photo">
            <img src={Stella} alt="" />
            <h2>Dr. Stella Maris</h2>
            <p>General Physician</p>
            <div className="acc">
              <img className="iconn" src={Chat} alt="" />
              <img className="iconn" src={Call} alt="" />
              <img className="iconn" src={Live} alt="" />
            </div>
          </div>
        </div>
        <div className="pat">
          <h2>Patients Say</h2>
          <div className="pat-text">
            <div className="inner-text">
              <p>
                “I had a wonderful experience with Medkit. They ensured my
                health was greatly taken care of. I highly recommend Medkit.”
              </p>
              <h3>Aliya Roll</h3>
            </div>
            <div className="inner-text2">
              <p>
                “My treatment was second to none and the staffs of Medkit were
                polite and caring”
              </p>
              <h3>Elo Zona</h3>
            </div>
          </div>
          <img src={Line} alt="" />
        </div>
        <div className="rep">
          <h2>We Operate 24h a day - 7 days a week!</h2>
          <button type="submit">REPORT A PROBLEM</button>
        </div>
      </div>
    </div>
  );
}

export default Section2