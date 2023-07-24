import React from "react";
import "../styles/aboutsection1.css";
import Sec1doc from "../assets/sec1doc.png";
import Sec2doc from "../assets/sec2doc.png"
import { IoMdCheckboxOutline } from "react-icons/io";
import Sec1docd from "../assets/sec1docd.png"

const Aboutsection1 = () => {
  return (
    <div>
      <div className="section1">
        <img className="sec1docc" src={Sec1doc} alt="" />
        <img className="sec1docd" src={Sec1docd} alt="" />
        <div className="section1-text">
          <h2>About Us</h2>
          <h3>
            We Are Thoroughly Committed To Making Your Health Our Priority
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.Morbi
            pellentesque ultricis id faucibus aliquam sed sit sed. Proiermentum
            mauris mi aliquet sed vel. Quam id secongue diam tincidunt enim.
          </p>
          <p className="pp">
            Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae duis
            leo lacus pellentesque sit. Turpis amet ut tortor scelerisque risus
            adipiscing et non. Interdum ac integer pretium aliquam auc.
            Tristique aliquet nisl odio risus diam. Morbi pellentesque ultricis
            id faucibus aliquam sed sit sed. Proin fermentum mauris mi aliquet
            sed vel. Quam id sed congue diam tincidunt enim.
          </p>
          <button type="submit">Learn More</button>
          <hr />
        </div>
      </div>
      <img className="sec2doc" src={Sec2doc} alt="" />
      <div className="section1-text2">
        <h2>Why Patients Choose Our Hospital?</h2>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
        <p>
          <IoMdCheckboxOutline className="cc" />
          Lorem ipsum dolor sit amet consectetur vestibulum.
        </p>
      </div>
    </div>
  );
};

export default Aboutsection1;
