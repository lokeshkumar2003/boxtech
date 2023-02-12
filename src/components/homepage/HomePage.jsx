import React from 'react';
import CreativeCnt from '../creativecnt/creativecnt';
import Footer from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import Pricing from '../pricing/Pricing';
import Profits from '../profits/Profits';
import SecondCnt from '../secondcnt/secondcnt';
import Services from '../services/Services';
import StartCnt from '../startcnt/startcnt';
import Testimonial from '../testimonial/Testimonial';

const HomePage = () => {
  return (
    <div>
        <StartCnt />
        <SecondCnt />
        <Services />
        <CreativeCnt />
        <Testimonial />
        <Pricing />
        <Profits />
        <Footer />
    </div>
  )
}

export default HomePage