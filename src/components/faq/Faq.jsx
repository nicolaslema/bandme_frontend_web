import React from 'react'

const Faq = () => {
  return (
    <div>
        <section className="bg-white  mb-24 mt-24">
    <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl ">Frequently asked questions.</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="inline-block p-3 text-white bg-bandme_orange rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 ">What is Bandme?</h1>

                    <p className="mt-2 text-sm text-gray-500 ">
                    Bandme is an application that centralizes your musical content and allows you to distinguish yourself in 3 different categories 
                    in order to connect with other people or places and expand your connections and opportunities
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-bandme_orange rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 ">What kind of content can you share in the application?</h1>

                    <p className="mt-2 text-sm text-gray-500 ">
                    You can share any type of musical content, events, new releases, likes or preferences, You can share content from other users you follow etc.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-bandme_orange rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 ">What benefits does the premium plan have?</h1>

                    <p className="mt-2 text-sm text-gray-500 ">
                    You will be given more visibility when publishing events, with a visual highlight and a higher priority in search engines, 
                    you will not have a character limit in the event description, 
                    and also if you have a spotify account you can access the content of your playlists from the app.
                    </p>
                </div>
            </div>


        </div>
    </div>
</section>
    </div>
  )
}

export default Faq