import React from 'react'
import { useEffect } from 'react'
import './EventDetails.css'



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

    useEffect(()=>{
  
    })

  return (
    <div className="bg-white flex-col ">
<img className='h-72  w-screen' src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
    <div className='bg-white relative main  w-screen  '>
  <div className="poly-1  absolute bg-blue-500  fun w-2/4 h-42 justify-start items-start  "> 
  
  
  </div>
  <h1 className='text-8xl font-bold font-Poppins titulo-evento '>{title}</h1>

<div class=" bg-white py-24 flex items-center justify-center ">
    
    <div className="flex-col items-center justify-center  ">
    <img src={profile_photo} alt="profile_picture" className='w-24 rounded-full' />
    <h1 className='font-bold font-Poppins'>{first_name}  {last_name}</h1>
    </div>
    

    
</div>
    

</div>


<div className='  flex-wrap flex justify-center py-8 gap-24'>
 

  <h1 className='text-2xl font-bold font-Poppins titulo-evento '>{street} - {street_number}</h1>
  <h1 className='text-2xl font-bold font-Poppins titulo-evento '>{date}</h1>
  <h1 className='text-2xl font-bold font-Poppins titulo-evento '>{time}/hs</h1>
  <h1 className='text-2xl font-font-Poppins titulo-evento  m-8'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Tempore modi in ab, corporis ducimus suscipit fugiat nulla impedit laboriosam 
  reiciendis aperiam nihil blanditiis iure quia dicta nostrum adipisci qui assumenda?
  </h1>
</div>




</div>


  )
}

export default EventInfo