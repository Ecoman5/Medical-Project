import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Footer from '../components/Footer';



const Homepage = () => {
  return <div className='bb'>
    <Header />
    <Banner />
    <Section1 />
    <Section2 />
    <Footer/>
  </div>;
}

export default Homepage
