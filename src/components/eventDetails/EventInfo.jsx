import React from 'react'

const EventInfo = ({
  title, 
  date, 
  time, 
  description,
  street,
  street_number,
  profile_photo,
  first_name,
  last_name}) => {


  return (
    <div>

<div className="mx-auto bg-bandme_dark  h-screen flex items-center justify-center px-8 ">

<div className='bg-slate-100 shadow-2xl w-screen h-3/4 rounded-br-2xl '>

  <div className='flex-1 shadow-2xl'>

    <div className='flex items-center justify-center bg-slate-100 shadow-2xl'>
      <img className='w-28  rounded-full items-center justify-center -m-5' src={profile_photo} alt="profilePicture"></img>
    </div>


    <div className='flex items-center justify-center bg-slate-100 mb-2 '>
      <h1 className='text-md  font-Poppins mt-8  overline  decoration-gray-400 decoration-2 underline-offset-8 decoration-wavy tracking-wide'>{first_name} {last_name}</h1>
    </div>


    <div className='flex items-center justify-center bg-bandme_orange p-8 '>
      <h1 className='text-3xl text-bandme_dark uppercase font-Poppins font-bold mt-8 '>{title}</h1>
    </div>

    </div>

    <div className=' flex-col items-center justify-center '>
      
   
   <div className='flex '> 
   <div className=' flex-col  w-2/4 h-2/4 bg-bandme_orange shadow-2xl'>
      <p className='text-2xl font-Poppins font-bold text-center text-slate-800 '>{street}</p>
      <p className='text-2xl font-Poppins font-bold text-center text-slate-800 '>{street_number}</p>
    </div>
    <div className=' flex-col  w-2/4 h-2/4 bg-bandme_orange shadow-2xl'>
      <p className='text-2xl font-Poppins font-bold uppercase text-center text-slate-800 '>{date}</p>
      <p className='text-2xl font-Poppins font-bold uppercase text-center text-slate-800 '>{time}</p>
    </div>

    </div>

    <p className='text-lg font-Poppins '>{description}</p>
    </div>

   



 
   

</div>





</div>












    
    

   </div>
  )
}

export default EventInfo