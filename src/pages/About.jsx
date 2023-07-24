import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Aboutbanner from '../components/Aboutbanner'
import Aboutsection1 from '../components/Aboutsection1'
import Aboutsection2 from '../components/Aboutsection2'

const About = () => {
  return  <div className='bb'>
      <Header />
      <Aboutbanner />
      <Aboutsection1 />
      <Aboutsection2/>
      <Footer/>
    </div>
}

export default About