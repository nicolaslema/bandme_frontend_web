import React from 'react'

const Pricing = () => {
  return (
    <div id='Pricing' className='bg-bandme_orange'>

<section>
  <div class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl ">
    <div class="max-w-2xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
      <div class="justify-center mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:max-w-2xl xl:mx-0 xl:grid-cols-2">
        <div class="bg-gray-50 rounded-xl">
          <div class="p-6 text-center">
            <h2 class="text-lg font-medium leading-6 text-neutral-600">Basic</h2>

            <p class="mt-8 text-4xl">
              <span class="font-black text-blue-500 uppercase">free</span>
          
            </p>
            <span class="text-xs text-neutral-600">No credit card required</span>
            <div class="mt-6">
              <a href="#" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-bandme_orange rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Buy Hobby</a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl">
          <div class="p-6 text-center">
            <h2 class="text-lg font-medium leading-6 text-neutral-600">Premium</h2>

            <p class="mt-8 text-4xl">
              <span class="font-black text-gray-500 uppercase">$29.99</span>
              <span class="font-medium text-gray-500">/Yr</span>
            </p>
            <div className="flex flex-col"> 
            <span class="text-sm text-neutral-600">Highlight your posts</span> 
            <span class="text-sm text-neutral-600">More visibility through your contacts</span>
            <span class="text-sm text-neutral-600">Access to Web Profile</span>
            <span class="text-sm text-neutral-900">Credit card required</span>
             </div>
           
            <div class="mt-6">
              <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-bandme_orange transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Buy for $29.99</a>
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

export default Pricing