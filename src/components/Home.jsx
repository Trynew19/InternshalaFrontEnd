import React from 'react'
import Landing from './Landing'
import Jobs from "./Jobs"
import Partner from './Partner'
import Step from './Step'
import Carrer from './Carrer'
import Aboute from './Aboute'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Landing/>
      <Jobs/>
      <Partner/>
      <Step/>
      <Carrer/>
      <Aboute/>
      <Footer/>

    </div>
  )
}

export default Home
