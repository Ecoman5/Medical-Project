import React from 'react'
import "../styles/aboutbanner.css"
import Butfind from "../assets/butfind.png"
import Butfindw from "../assets/butfindw.png";


const Aboutbanner = () => {
 return (
   <div>
     <div className="abann">
       <div className="abann-text">
         <h1>Health is Wealth</h1>
         <p>
           Health is most important in your daily life. We  strive to
           offer nothing but quality healthcare. You are rest assured
           your wellbeing and health are in safe hands.
         </p>
         <button type="submit">
           Find a Doctor <img src={Butfind} alt="" />{" "}
         </button>
         <button className='butfin' type="submit">
           Find a Doctor <img src={Butfindw} alt="" />{" "}
         </button>
       </div>
     </div>
   </div>
 );
}

export default Aboutbanner