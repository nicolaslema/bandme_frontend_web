import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className='relative'>
            <div className='container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
                <div className="flex flex-1 flex-col item-center lg:items-start "> 
                    <h1 className='text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'> A Centralized Music Social-Network</h1>
                </div>
                <p className="text-lg text-center lg:text-left mb-6">
                    A clean and simple applicacion to managing, share and enhance your music carear. Download the mobile applicacion for free
                    or try our anual plan for more benefits.
                </p>
               
               
            </div>
            <div className="flex justify-center flex-wrap gap-6 ">
                    <button type='button' className='btn btn-orange'>Download</button>
                    <button type='button'className='btn btn-white'>Info</button>
                </div>
        </section>

    </div>
  )
}

export default Hero