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
            Music Social Network
          </h2>
          
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simple Mobile applicacion to enhance your music career. Share, connect and discover the music arround you. 
            Try it for free or check out our anual premium plan for more benefits
          </p>
          <div class="flex justify-center flex-wrap gap-6">
          
            <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
                <a href="#" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-bandme_orange to-orange-600 hover:from-blue-600 hover:to-blue-600">
                    <svg class="w-6 h-6 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg"><path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path></svg>
                    <span class="mx-2">
                        Get it on Google Play
                    </span>
                </a>
            </div>
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