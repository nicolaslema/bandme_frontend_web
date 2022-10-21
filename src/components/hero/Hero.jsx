import React from 'react'
import band from '../../assets/band.jpg'


const Hero = () => {
  return (
    <div className=''>
       <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center   h-screen">
    
        <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2 class="text-Poppins text-3xl md:text-4 lg:text-5xl text-center lg:text-left mt-12">
            BANDME
          </h2>
          <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left ">
            Music Social network
          </h2>
          
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simple Mobile applicacion to enhance your music career. Share, connect and discover the music arround you. 
            Try it for free or check out our anual premium plan for more benefits
          </p>
          <div class="flex justify-center flex-wrap gap-6">
            <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">
              Download for Android
            </button>
            <button type="button" class="btn btn-white hover:bg-bookmark-purple hover:text-white">
              More Info
            </button>
          </div>
        </div>
        
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={band} alt="" />
        </div>
        
      </div>
    
  
    </section>

    </div>
  )
}

export default Hero