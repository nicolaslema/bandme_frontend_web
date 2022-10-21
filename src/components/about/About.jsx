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
            <h1>BANDME centralizes all your music-related activity in one place.</h1>
                <h2>Discover, Share and connect with other musicians, bands and establishments to improve your musical career</h2>
                <p>Bandme allows you to share your music, form bands, establish connections with bars, clubs, pubs, discover new artists and much more.</p>

            </div>
        </div>

        <div class="shadow-lg flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <i className="text-5xl text-bandme_orange"><FaUser/></i>
            </div>
            <div class=" flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                <h2 className='text-center mb-3 text-lg uppercase'>Artist</h2>
                <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>


        <div class="shadow-lg flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <i className="text-5xl text-bandme_orange"><HiUserGroup/></i>
            </div>
            <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                <h2 className='text-center mb-3 text-lg uppercase' >Band</h2>
                <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>


        <div class="shadow-lg flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            <i className="text-5xl text-bandme_orange"><MdStoreMallDirectory/></i>
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