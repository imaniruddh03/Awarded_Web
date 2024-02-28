import React from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Featured from './component/Featured'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
      
    </div>
  )
}

export default App
