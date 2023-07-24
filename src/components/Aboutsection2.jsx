import React from 'react'
import "../styles/aboutsection2.css"
import Adoc from "../assets/adoc.png"

const Aboutsection2 = () => {
  return (
    <div>
      <div className="section2">
        <div className="st">
          <h2>Our Story</h2>
          <p className="sttt">
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
          </p>
          <p className="stt">
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
            Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla in
            dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut
            sit gravida dui fermentum sed. Semper pharetra urna pretium massa ut
            fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi
            nibh aliquam nisl.
          </p>
          <button type="submit">Learn More</button>
          <div className="str">
            <div className="str1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="228"
                viewBox="0 0 220 228"
                fill="none"
              >
                <rect
                  x="20"
                  y="28"
                  width="200"
                  height="200"
                  rx="20"
                  fill="#1E3673"
                />
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="198"
                  rx="19"
                  fill="#2F98C2"
                  stroke="#1E3673"
                  stroke-width="2"
                />
              </svg>
              <h1>98%</h1>
              <p>Satisfied Patients</p>
            </div>
            <div className="str2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="228"
                viewBox="0 0 220 228"
                fill="none"
              >
                <rect
                  x="20"
                  y="28"
                  width="200"
                  height="200"
                  rx="20"
                  fill="#1E3673"
                />
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="198"
                  rx="19"
                  fill="#2F98C2"
                  stroke="#1E3673"
                  stroke-width="2"
                />
              </svg>
              <h1>20 +</h1>
              <p>Team Members</p>
            </div>
          </div>
          <div className="strr">
            <div className="strr1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="228"
                viewBox="0 0 220 228"
                fill="none"
              >
                <rect
                  x="20"
                  y="28"
                  width="200"
                  height="200"
                  rx="20"
                  fill="#1E3673"
                />
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="198"
                  rx="19"
                  fill="#2F98C2"
                  stroke="#1E3673"
                  stroke-width="2"
                />
              </svg>
              <h1>15 +</h1>
              <p>Merit Awards </p>
            </div>
            <div className="strr2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="228"
                viewBox="0 0 220 228"
                fill="none"
              >
                <rect
                  x="20"
                  y="28"
                  width="200"
                  height="200"
                  rx="20"
                  fill="#1E3673"
                />
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="198"
                  rx="19"
                  fill="#2F98C2"
                  stroke="#1E3673"
                  stroke-width="2"
                />
              </svg>
              <h1>10 +</h1>
              <p>Experience </p>
            </div>
          </div>
        </div>
        <div className="sect">
          <div className="vi">
            <h2>Our Vision</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
              fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut
              bibendum in.
            </p>
          </div>
          <div className="mi">
            <h2>Mission</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
              fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut
              bibendum in.
            </p>
          </div>
          <img src={Adoc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutsection2