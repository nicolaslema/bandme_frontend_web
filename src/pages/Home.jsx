import React from 'react'
import{NavBar, Hero, About, Features, Pricing, Footer} from '../components'

const Home = () => {
  return (
    
    <div className=''>
      <div className=''>
      <NavBar/>
      <Hero/> 
      <Pricing/>
      <About/>
      <Features/>

      <Footer/>
      </div>

    
      
      </div>
  )
}

export default Home