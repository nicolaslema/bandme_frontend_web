import React from 'react'
import {MdStoreMallDirectory} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'

const About = () => {
  return (
    <div>

<section id='About' className=''>
<div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose  prose-blue">
            <div class="w-full mx-auto">
            <h1 className='text-5xl text-Poppins font-bold text-center mb-4'>Centralize all your music-related activity in one place.</h1>
                <h2 className='text-center text-lg text-Poppins '>Discover, Share and connect with other musicians, bands and establishments to improve your musical career
                Bandme allows you to share your music, form bands, establish connections with bars, clubs, pubs, discover new artists and much more.
                </h2>
                

            </div>
        </div>

        <div class="shadow-2xl flex flex-col items-center  pb-10 mx-auto my-10 border-b border-gray-400 max-w-7xl sm:flex-row  hover:text-black py-4 px-4 rounded ">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-transparent sm:mr-10  ">
            <i className="text-5xl text-bandme_dark"><FaUser/></i>
            </div>
            <div class=" flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                <h2 className='text-center mb-3 text-lg uppercase'>Artist</h2>
                <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>


        <div class="shadow-2xl flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-400 max-w-7xl sm:flex-row py-4 px-4 rounded">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-transparent sm:mr-10">
            <i className="text-5xl text-bandme_dark"><HiUserGroup/></i>
            </div>
            <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                <h2 className='text-center mb-3 text-lg uppercase' >Band</h2>
                <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>


        <div class="shadow-2xl flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-400 max-w-7xl sm:flex-row py-4 px-4 rounded">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-transparent sm:mr-10">
            <i className="text-5xl text-bandme_dark"><MdStoreMallDirectory/></i>
            </div>
            <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                <h2 className='text-center mb-3 text-lg uppercase'>Establishment </h2>
                <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>


     
    </div>
            </div>
        </div>
      
  
    </div>
</section>
    </div>
  )
}




export default About