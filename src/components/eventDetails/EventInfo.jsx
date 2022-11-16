import React from 'react'
import { useEffect } from 'react'
import './EventDetails.css'
import wallEvent from '../../assets/wallEvent1.jpg'



const EventInfo = ({
  title, 
  date, 
  time, 
  description,
  street,
  street_number,
  profile_photo,
  first_name,
  last_name,
  image_url}) => {

   

    useEffect(()=>{
      if (image_url === ''){
        image_url = wallEvent
      }
  
    })  

  return (
    <div className="relative overflow-hidden bg-white h-screen">
    <div className="mx-auto max-w-7xl ">
      <div className="relative z-10 bg-white h-screen pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        
        <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
  
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28">

          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline font-Poppins">{title}</span>
            </h1>


            <p className="font-Poppins text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
             
             {description}

            </p>

          
            <div className="flex items-center mt-4 gap-8">
            <img src={profile_photo} alt="profile_picture" className='w-24 rounded-full' />
              <h1 className='font-Poppins text-lg'>{first_name} {last_name}</h1>
            </div>


            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-bandme_orange px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">{date} 
                <span className='ml-24'>{time}/hs</span>
                
                </p>
                
              </div>
            
            </div>


            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-bandme_orange px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                  {street} - {street_number}
                
                
                </p>
                
              </div>
            
            </div>


          </div>


        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-screen  ">
      <img className="h-56 w-full h-screen object-cover sm:h-72 md:h-96 lg:h-screen lg:w-full" src={image_url} alt=""   >
      </img>
    </div>
  </div>
 







  )
}

export default EventInfo




