import React from 'react'
import Navbar from './Navbar';
import landingimg from '../assets/landing.png'
import About from './About';
import DownloadOurApp from './DownloadOurApp';
import Footer from './Footer';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-col text-center items-center bg-[#14211C] text-white">
        <p className='text-xl my-4'>For Seamless Onboarding</p>
        <p className='text-3xl font-bold my-2'>Property Management Experience</p>
        <p>Our commitment to innovation and customer satisfaction ensures that we are constantly improving and <br /> tailoring our software to meet the unique needs of the property management industry.</p>
        <img src={landingimg} alt="" className='w-[700px] my-5' />
      </div>
      <About />
      <DownloadOurApp />
      <Footer />
    </div>
  )
}

export default Home
